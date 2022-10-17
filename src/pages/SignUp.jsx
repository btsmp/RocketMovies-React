import { FiLock, FiMail, FiUser, FiArrowLeft } from "react-icons/fi";
import { TextButton } from "../components/TextButton";
import { TitleForm } from '../components/TitleForm';
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { CineBg } from "../components/CineBg";
import { Input } from "../components/Input";
import { Title } from "../components/Title";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { api } from "../services/api";

export function SignUp() {

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm({
    name: "",
    email: "",
    password: ""
  })



  function handleSignUp(data) {
    const { name, email, password } = data

    if (!name || !email || !password) {
      return toast.error('Preencha todos os campos')
    }

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
  return (
    <div className="flex">
      <div className="bg-[#1C1B1E] flex flex-col w-[800px] items-left justify-center px-32 h-screen gap-4">
        <div className="mt-30">
          <Title />
        </div>
        <div>
          <TitleForm title="Faça sua conta" />

          <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-2 mt-4">
            <Input
              type="text"
              placeholder="Nome"
              icon={FiUser}
              register={register('name')}
            />
            <Input
              type="text"
              placeholder="E-mail"
              icon={FiMail}
              register={register('email')}
            />
            <Input
              type="password"
              placeholder="Senha"
              icon={FiLock}
              register={register('password')}
            />
            <div className="h-14">
              <Button title="Cadastrar" />
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