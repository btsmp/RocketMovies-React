import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/auth";
import { Input } from "./Input";

import nullAatar from '../assets/avatarprev.jpg'

export function Header({ handleSearch }) {
  const { signOut, user } = useAuth()
  const navigate = useNavigate()

  const imgSrc = user.avatar ? user.avatar : nullAatar

  function handleSignOut() {
    const confirmation = confirm("Deseja mesmo sair?")
    if (confirmation) {
      signOut()
      navigate('/')
    }
  }

  function handleSearchValue(value) {
    if (handleSearch instanceof Function) {
      handleSearch(value)
    } else {
      return
    }
  }
  return (
    <header className="flex items-center py-4 px-24 gap-16 justify-between border-b-[1px] border-b-gray-light h-[116px]">
      <div>
        <Link to='/'>
          <h1 className="text-[#FF859B] font-bold text-2xl">RocketMovies</h1>
        </Link>
      </div>
      <div className="w-[66vh]">
        <Input placeholder="Pesquisar por título" type="text" onChange={e => handleSearchValue(e.target.value)} />
      </div>
      <div>
        <div className="flex justify-center items-center text-right">
          <div className="">
            <Link to='/profile'>
              <h1 className="text-[#F4EDE8]">{user.name}</h1>
            </Link>
            <span className="text-[#948F99] cursor-pointer" onClick={handleSignOut}>sair</span>
          </div>
          <Link to='/profile'>
            <img
              src={imgSrc}
              alt={`Imagem de ${ user.name }`}
              width={50}
              height={50}
              className="rounded-full ml-2 border-white border-[1px]"
            />
          </Link>
        </div>
      </div>
    </header>
  )
}