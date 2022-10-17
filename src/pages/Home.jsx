import { Link, useNavigate } from "react-router-dom";
import { CardMovie } from "../components/CardMovie";
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { useEffect, useState } from 'react';
import { api } from '../services/api';

export function Home() {
  const [ notes, setNotes ] = useState([])
  const [ search, setSearch ] = useState('')
  const navigate = useNavigate()

  function handleClickNote(note) {

    navigate(`/details/${ note }`)
  }

  useEffect(() => {
    async function getFilteredNotes() {
      const response = await api.get(`/notes?title=${ search }`)
      setNotes(response.data)
    }
    getFilteredNotes()
  }, [ search ])
  useEffect(() => {
    async function getNotes() {
      const response = await api.get('/notes')
      setNotes(response.data)
    }
    getNotes()
  }, [])
  return (
    <div className="grid grid-flow-row h-screen">
      <Header handleSearch={setSearch} />

      <div className="px-24 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full relative">

        <div className="flex items-baseline justify-between mt-12 mb-9 ">
          <h1 className="text-white font-normal text-4xl">Meus filmes</h1>
          <Link to="/new" className="w-48 h-12">
            <Button title="Adicionar filme" icon={AiOutlinePlus} />
          </Link>
        </div>
        <main className="flex gap-4 flex-col h-[65vh] overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full mb-9">
          {notes &&
            notes.map(note => (
              <CardMovie
                key={note.id}
                data={note}
                onClick={() => handleClickNote(note.id)}
              />
            ))
          }
        </main>
      </div>

    </div>
  )
}