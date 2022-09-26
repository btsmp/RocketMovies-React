import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { AiOutlinePlus } from "react-icons/ai"
import { CardMovie } from "../components/CardMovie";

export function Home() {
  return (
    <div className="grid grid-flow-row h-screen">
      <Header />
      <div className="px-24 overflow-scroll">
        <div className="flex items-baseline justify-between mt-12 mb-9 ">
          <h1 className="text-white font-normal text-4xl">Meus filmes</h1>
          <div className="w-48 h-12">
            <Button title="Adicionar filme" icon={AiOutlinePlus} />
          </div>
        </div>
        <main className="flex gap-4 flex-col h-[65vh] overflow-scroll mb-4">
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
          <CardMovie />
        </main>
      </div>
    </div>
  )
}