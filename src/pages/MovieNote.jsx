import { useNavigate, useParams } from "react-router-dom";
import { TextButton } from "../components/TextButton";
import { FiArrowLeft, FiClock } from "react-icons/fi";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";
import { Stars } from "../components/Stars";
import { useAuth } from "../hooks/auth";
import { Tag } from "../components/Tag";
import { toast } from 'react-toastify';
import { api } from "../services/api";

import nullAatar from '../assets/avatarprev.jpg';

export function MovieNote() {
  const { note_id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()

  const [ note, setNote ] = useState({})
  const [ date, setDate ] = useState('')

  const imgSrc = user.avatar ? user.avatar : nullAatar

  function convertDataToBrFormat(timestamp) {
    const [ date, ] = timestamp.split(' ')
    const dateBR = date.split('-').reverse().join('/')
    setDate(dateBR)

  }
  function handleDelete() {
    api.delete(`/notes/${ note_id }`)
    toast.success('Nota excluída')
    navigate('/')
  }
  useEffect(() => {
    async function getNoteDetails() {
      const response = await api.get(`/notes/${ note_id }`)
      setNote(response.data)
      convertDataToBrFormat(response.data.created_at)
    }

    getNoteDetails()
  }, [])

  return (

    <div className='h-screen'>
      <Header />
      <div className="px-24 overflow-scroll flex flex-col min-h-[80vh]">
        <div className="flex justify-between mt-9">
          <div>
            <div className="w-28">
              <TextButton to="/" title="Voltar" icon={FiArrowLeft} />
            </div>
            <div className="flex gap-3 my-4 text-4xl">
              <h1 className="text-[#F4EDE8] font-medium">{note.title}</h1>
              <Stars rating={note.rating} />
            </div>
            <div className="text-white">
              <p
                className="flex items-center gap-2"
              >
                <img
                  className="w-4 rounded-full"
                  src={imgSrc}
                  alt={`Imagem de ${ user.name }`}
                />
                <span className="mr-2">
                  Por {user.name}
                </span>

                <FiClock color="#FF859B" />
                {date}
              </p>
            </div>
            <div className="flex py-8 gap-2">
              {note.tags &&
                note.tags.map(tag => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
            </div>
          </div>
          <div >
            <img src={`https://image.tmdb.org/t/p/w200${ note.banner }`} alt="" />
          </div>
        </div>
        <main className="text-[#F4EDE8] text-justify mb-11 ">
          {note.description}
          <div>
            <button
              className="my-28 bg-[#0D0C0F] text-[#FF859B] rounded-lg p-4 w-full hover:brightness-75"
              onClick={handleDelete}
            >
              Excluir nota
            </button>
          </div>
        </main>

      </div>
    </div >
  )
}