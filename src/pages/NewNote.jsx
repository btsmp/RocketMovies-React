import { Header } from "../components/Header";
import { Input } from '../components/Input';
import { Marker } from "../components/Marker";
import { TextButton } from "../components/TextButton";
import { TitleForm } from './../components/TitleForm';
import { FiArrowLeft } from "react-icons/fi"
import { Button } from './../components/Button';

export function NewNote() {
  return (
    <div className="grid grid-flow-row h-screen">
      <Header />
      <div className="px-24 overflow-y-scroll">
        <div>
          <TextButton title='Voltar' icon={FiArrowLeft} />
        </div>
        <div className="my-8">
          <TitleForm title='Novo filme' />
        </div>
        <form className="flex flex-col gap-10 mb-36">
          <div className="flex gap-10">
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>
          <div>
            <textarea
              rows={10}
              placeholder='Observações'
              className="resize-none w-full bg-[#262529] rounded-lg text-[#948F99] p-4"
            />
          </div>
          <div>
            <TitleForm title='Marcadores' />
            <div className="bg-[#0D0C0F] flex flex-wrap rounded-lg gap-6 p-4 mt-6">
              <Marker value='React' />
              <Marker isNew={true} placeholder="Novo marcador" />
            </div>
          </div>

          <div className="flex gap-10 w-full items-center justify-center">
            <button className=" bg-[#0D0C0F] text-[#FF859B] rounded-lg w-1/2 p-4">
              Excluir filme
            </button>
            <div className="w-1/2 h-[56px]">
              <Button title='Salvar alterações' />
            </div>
          </div>
        </form>
      </div >
    </div >
  )
}