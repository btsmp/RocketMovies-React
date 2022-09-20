import { Input } from "./Input";

export function Header() {
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
            <h1 className="text-[#F4EDE8]">Bruno Sampaio</h1>
            <a href="#" className="text-[#948F99]">sair</a>
          </div>
          <img src="https://github.com/btsmp.png" alt="" width={50} height={50} className="rounded-full ml-2 border-white border-[1px]" />
        </div>
      </div>
    </header>
  )
}