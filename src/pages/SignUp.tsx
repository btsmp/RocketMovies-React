import { Button } from "../components/Button";
import { CineBg } from "../components/CineBg";
import { Input } from "../components/Input";
import { TextButton } from "../components/TextButton";
import { Title } from "../components/Title";
import { TitleForm } from './../components/TitleForm';
import { FiLock, FiMail, FiUser } from "react-icons/fi"

export function SignUp() {
  return (
    <div className="flex">
      <div className="bg-[#1C1B1E] flex flex-col w-[800px] items-left justify-center px-32 h-screen">
        <div className="mt-30">
          <Title />
        </div>
        <div>
          <TitleForm title="Faça sua conta" />

          <form className="flex flex-col gap-2">
            <Input type="text" placeholder="Nome" icon={FiUser} />
            <Input type="text" placeholder="E-mail" icon={FiMail} />
            <Input type="password" placeholder="Senha" icon={FiLock} />
            <Button title="Cadastrar" />
          </form>
        </div>
        <TextButton link="#" title="Voltar para o login" />
      </div>
      <CineBg />
    </div>
  )
}