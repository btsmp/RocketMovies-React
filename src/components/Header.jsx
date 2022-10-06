import { Input } from "./Input";
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth";
import nullAatar from '../assets/avatarprev.jpg'

export function Header() {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const imgSrc = user.avatar ? user.avatar : nullAatar

  function handleSignOut() {
    signOut()
    navigate('/')
  }
  return (
    <header className="flex items-center py-4 px-24 gap-16 justify-between border-b-[1px] border-b-gray-light h-[116px]">
      <div>
        <h1 className="text-[#FF859B] font-bold text-2xl">RocketMovies</h1>
      </div>
      <div className="w-[66vh]">
        <Input placeholder="Pesquisar por título" type="text" />
      </div>
      <div>
        <div className="flex justify-center items-center text-right">
          <div className="">
            <Link to='/profile'>
              <h1 className="text-[#F4EDE8]">{user.name}</h1>
            </Link>
            <a href="" className="text-[#948F99]" onClick={handleSignOut}>sair</a>
          </div>
          <img src={imgSrc} alt="" width={50} height={50} className="rounded-full ml-2 border-white border-[1px]" />
        </div>
      </div>
    </header>
  )
}