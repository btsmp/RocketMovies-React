import { Input } from '../components/Input'
import { FiLock, FiMail } from "react-icons/fi"
import { Button } from '../components/Button'
import { Title } from '../components/Title';
import { CineBg } from '../components/CineBg';
import { TextButton } from '../components/TextButton';
import { TitleForm } from '../components/TitleForm';

export function SignIn() {
  return (

    <div className="flex">
      <div className="bg-[#1C1B1E] flex flex-col w-[800px] items-left justify-center px-32 h-screen">
        <div className="mt-30">
          <Title />
        </div>
        <div>
          <TitleForm title='Faça seu login' />
          <form className="flex gap-2 flex-col">
            <Input type='text' placeholder='E-mail' icon={FiMail} />
            <Input type='password' placeholder='Senha' icon={FiLock} />
            <div className="h-14">
              <Button title="Entrar" />
            </div>
          </form>
        </div>
        <div className='flex justify-center'>
          <TextButton link='#' title='Criar conta' />
        </div>
      </div>
      <CineBg />
    </div>

  )
}