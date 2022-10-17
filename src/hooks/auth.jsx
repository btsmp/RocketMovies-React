import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
import { toast } from 'react-toastify';

const AuthContext = createContext({})

function AuthProvider({ children }) {
  const [ loading, setLoagind ] = useState(false)
  const [ data, setData ] = useState({})

  function placeToken(token) {
    api.defaults.headers.common[ 'Authorization' ] = `Bearer ${ token }`
  }

  function saveUserSessionInLocalStorage(user, token) {
    localStorage.setItem('@rocketmovies-user', JSON.stringify(user))
    localStorage.setItem('@rocketmovies-token', token)

    return {
      user,
      token
    }

  }

  async function signIn({ email, password }) {

    try {
      setLoagind(true)
      const response = await api.post("/sessions", { email, password })
      const { user, token } = response.data

      placeToken(token)

      saveUserSessionInLocalStorage(user, token)

      setData({ user, token })
      setLoagind(false)

    } catch (err) {
      if (err.response.data) {
        toast.error(err.response.data.message)
      } else {
        toast.error('Ocorreu um erro ao fazer login!')
      }

      setLoagind(false)
    }
  }

  async function signInWithGoogle({ email, name, picture: avatar, sub: id }) {
    try {
      setLoagind(true)
      const response = await api.post('/sessions-google', { email, name, avatar, id })
      const { user, token } = response.data

      placeToken(token)
      saveUserSessionInLocalStorage(user, token)

      setData({ user, token })

      setLoagind(false)
    } catch (err) {
      if (err.response.data) {
        toast.error(err.response.data.message)
      } else {
        toast.error('Ocorreu um erro ao fazer login!')
      }

      setLoagind(false)
    }
  }

  async function updateProfile({ user, avatarFile }) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData()
        fileUploadForm.append("avatar", avatarFile)
        const response = await api.patch('/users/avatar', fileUploadForm)
        user.avatar = response.data.avatar
      }

      await api.put('/users', user)

      localStorage.setItem("@rocketmovies-user", JSON.stringify(user))
      setData({ user, token: data.token })
      toast.success('Perfil atualizado!')
    } catch (err) {

      toast.error('Ocorreu um erro ao atualizar o perfil.')

    }
  }


  function signOut() {
    localStorage.removeItem('@rocketmovies-user')
    localStorage.removeItem('@rocketmovies-token')

    setData({})
  }

  useEffect(() => {
    const user = localStorage.getItem('@rocketmovies-user')
    const token = localStorage.getItem('@rocketmovies-token')

    if (user && token) {
      placeToken(token)
      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, [])
  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      signInWithGoogle,
      updateProfile,
      loading,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider >
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context
}

export { AuthProvider, useAuth }