import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi"
import { TextButton } from "../components/TextButton";
import { TitleForm } from '../components/TitleForm';
import { Button } from "../components/Button";
import { CineBg } from "../components/CineBg";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { api } from "../services/api";
import { toast } from 'react-toastify'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [ name, setName ] = useState()
  const [ email, setEmail ] = useState()
  const [ password, setPassword ] = useState()

  const navigate = useNavigate()

  function signUp() {

    api.post("/users", { name, email, password })
      .then(() => {
        toast.success("Usuário cadastrado com sucesso")
        navigate('/')
      }).catch(error => {
        if (error.response.data) {
          toast.error(error.response.data.message)
        } else {
          toast.error('Cadastro não pde ser realizado no momento')
        }
      })
  }

  function handleSignUp(e) {
    e.preventDefault()
    if (name && password && email) {
      signUp()
    } else {
      toast.error('Preencha todos os campos')
    }
  }
  return (
    <div className="flex">
      <div className="bg-[#1C1B1E] flex flex-col w-[800px] items-left justify-center px-32 h-screen gap-4">
        <div className="mt-30">
          <Title />
        </div>
        <div>
          <TitleForm title="Faça sua conta" />

          <form className="flex flex-col gap-2 mt-4">
            <Input type="text" placeholder="Nome" icon={FiUser} onChange={e => setName(e.target.value)} />
            <Input type="text" placeholder="E-mail" icon={FiMail} onChange={e => setEmail(e.target.value)} />
            <Input type="password" placeholder="Senha" icon={FiLock} onChange={e => setPassword(e.target.value)} />
            <div className="h-14">
              <Button title="Cadastrar" onClick={handleSignUp} />
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <TextButton to="/" title="Voltar para o login" icon={FiArrowLeft} />
        </div>
      </div>
      <CineBg />
    </div>
  )
}