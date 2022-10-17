import { LoadingContainer } from '../components/LoadingContainer';
import { TextButton } from '../components/TextButton';
import { TitleForm } from '../components/TitleForm';
import { GoogleLogin } from '@react-oauth/google';
import { FiLock, FiMail } from "react-icons/fi";
import { Notify } from '../components/notify';
import { CineBg } from '../components/CineBg';
import { Button } from '../components/Button';
import { Title } from '../components/Title';
import { Input } from '../components/Input';
import { useForm } from 'react-hook-form';
import { useAuth } from '../hooks/auth';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";

export function SignIn() {
  const { signIn, signInWithGoogle, loading } = useAuth()
  const { register, handleSubmit } = useForm({
    email: "",
    password: ""
  })

  function handleSignIn(data) {
    const { email, password } = data
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
            loading ? <LoadingContainer /> :
              <form
                className="flex gap-2 flex-col mt-3"
              >
                <Input
                  type='text'
                  placeholder='Email'
                  icon={FiMail}
                  register={register('email')}
                />
                <Input
                  type='password'
                  placeholder='Senha'
                  icon={FiLock}
                  register={register('password')}
                />
                <div className="h-14">
                  <Button
                    title="Entrar"
                    onClick={handleSubmit(handleSignIn)}
                  />
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