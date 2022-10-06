import { Input } from "../components/Input";
import { FiLock, FiMail, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi"
import { Button } from "../components/Button";
import { TextButton } from "../components/TextButton";
import { useAuth } from "../hooks/auth";
import nullAatar from '../assets/avatarprev.jpg'

export function Profile() {
  const { user } = useAuth()

  const imgSrc = user.avatar ? user.avatar : nullAatar
  return (
    <div>
      <div className="bg-[#FF859B]/5 pl-36 py-12 ">
        <TextButton to="/" title="Voltar" icon={FiArrowLeft} />
      </div>

      <div className="w-80 mx-auto flex flex-col items-center -m-24 ">
        <div className="mb-10 relative">
          <img src={imgSrc} alt={`Imagem de ${ user.name }`} width={180} height={180} className="rounded-full border-white border-[1px]" />
          <button className="absolute bg-[#FF859B] hover:brightness-125 border-white border-[1px] p-4 rounded-full right-0 bottom-1"><FiCamera /></button>
        </div>

        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Input icon={FiUser} type="text" placeholder={user.name} />
            <Input icon={FiMail} type="text" placeholder={user.email} />
          </div>
          <div className="flex flex-col gap-2">
            <Input icon={FiLock} type="password" placeholder="Senha atual" />
            <Input icon={FiLock} type="password" placeholder="Nova senha" />
          </div>
          <div className="h-11">
            <Button title="Salvar" />
          </div>
        </form>
      </div >
    </div >
  )
}