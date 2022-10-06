import { LoadingContainer } from '../components/LoadingContainer'
import { TextButton } from '../components/TextButton'
import { TitleForm } from '../components/TitleForm'
import { GoogleLogin } from '@react-oauth/google'
import { FiLock, FiMail } from "react-icons/fi"
import 'react-toastify/dist/ReactToastify.css'
import { Notify } from '../components/notify'
import { CineBg } from '../components/CineBg'
import { Button } from '../components/Button'
import { Title } from '../components/Title'
import { Input } from '../components/Input'
import { useAuth } from '../hooks/auth'
import { toast } from 'react-toastify'
import jwt_decode from "jwt-decode";

import { useState } from 'react'



export function SignIn() {
  const { signIn, signInWithGoogle, loading } = useAuth()
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email | !password) {
      return toast.warning('Preencha todos os campos!')
    }
    signIn({ email, password })
  }

  function handleSignInWithGoogle(googleResponse) {
    const googleResponseCredentials = jwt_decode(googleResponse.credential)
    signInWithGoogle(googleResponseCredentials)

  }
  return (

    <div className="flex">
      <div className="bg-[#1C1B1E] flex flex-col w-[800px] items-left justify-center px-32 h-screen  gap-4">
        <div className="mt-30">
          <Title />
        </div>
        <div>
          <TitleForm title='Faça seu login' />
          {
            loading ? <LoadingContainer /> : <form
              className="flex gap-2 flex-col mt-3"
            >
              <Input type='text' icon={FiMail} placeholder='Email' name={'email'} onChange={e => setEmail(e.target.value)} />
              <Input type='password' placeholder='Senha' icon={FiLock} onChange={e => setPassword(e.target.value)} />
              <div className="h-14">
                <Button title="Entrar" onClick={handleSubmit} />
              </div>
              <div className="flex items-center justify-center">
                <GoogleLogin
                  onSuccess={googleResponse => handleSignInWithGoogle(googleResponse)}
                  onError={() => toast.error('Error ao fazer login!')}
                />
              </div>
            </form>
          }
        </div>
        <div className='flex justify-center'>
          <TextButton to='/register' title='Criar conta' />
        </div>
      </div>
      <CineBg />
      <Notify />
    </div>

  )
}