import { Header } from "../components/Header";
import { TextButton } from "../components/TextButton";
import { FiLock, FiMail, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi"
import { TitleMovie } from "../components/TitleMovie";
import { Stars } from "../components/Stars";
import { Tags } from "../components/Tags";

export function MovieNote() {
  return (
    <div className="grid grid-flow-row h-screen">
      <Header />
      <div className="px-24 overflow-scroll">
        <div className="w-28">
          <TextButton title="Voltar" icon={FiArrowLeft} />
        </div>
        <div className="flex gap-3 my-4 text-4xl">
          <h1 className="text-[#F4EDE8] font-medium">Interestellar</h1>
          <Stars ratingUser={4} />
        </div>
        <div className="text-white">
          <p
            className="flex items-center gap-2"
          >
            <img
              className="w-4 rounded-full"
              src="https://github.com/btsmp.png"
              alt=""
            />
            <span>
              Por Bruno Sampaio
            </span>
            21/09/2021
          </p>
        </div>
        <div className="flex py-8 gap-2">
          <Tags title="Ficção científica" />
          <Tags title="Drama" />
          <Tags title="Família" />
        </div>
        <main className="text-[#F4EDE8] text-justify mb-11">
          <p>
            Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.
          </p>
          <br />
          <p>
            Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.
          </p>
        </main>
      </div>
    </div>
  )
}