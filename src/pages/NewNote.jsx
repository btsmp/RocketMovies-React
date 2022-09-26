import { Header } from "../components/Header";
import { Input } from '../components/Input';

export function NewNote() {
  return (
    <div className="grid grid-flow-row h-screen">
      <Header />
      <div>
        <div></div>
        <div></div>
        <form>
          <div>
            <Input placeholder="Título" type="text" />
            <Input placeholder="Sua nota (de 0 a 5)" type="number" />
          </div>
          <div>
            <textarea name="" id="" cols={30} rows={10}>

            </textarea>
          </div>
        </form>
      </div>
    </div>
  )
}