import { TitleForm } from '../components/TitleForm';
import { TextButton } from "../components/TextButton";
import { api, tmdbApi } from '../services/api';
import { Button } from '../components/Button';
import { useNavigate } from 'react-router-dom';
import { Header } from "../components/Header";
import { Marker } from "../components/Marker";
import { FiArrowLeft } from "react-icons/fi";
import { Input } from '../components/Input';
import { toast } from 'react-toastify';
import { useState } from 'react';



export function NewNote() {

  const [ title, setTitle ] = useState('')
  const [ description, setDescription ] = useState('')

  const [ rating, setRating ] = useState()

  const [ tags, setTags ] = useState([])
  const [ tagValue, setTagValue ] = useState('')

  const [ titleMovies, setTitleMovies ] = useState('')

  const navigate = useNavigate()

  function handleAddTag() {
    if (!tagValue) {
      return
    }
    setTags(prevState => [ ...prevState, tagValue ])

    setTagValue('')
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleCreateNote(e) {
    e.preventDefault()

    if (!title | !description | !rating) {
      return toast.warning('Preencha todos os campos')
    }


    api.post('/notes', {
      title,
      description,
      rating: Number(rating),
      tags,
      banner: titleMovies[ 0 ].poster_path
    })
    toast.success('Nota criada!')
    navigate('/')
  }

  async function fetchMovieTitle(e) {
    const movieTitle = e.target.value
    setTitle(movieTitle)
    const response = await tmdbApi.get(movieTitle)
    const movies = response.data.results
    setTitleMovies(movies.map(movie => (
      {
        title: movie.title ? movie.title : movie.name,
        poster_path: movie.poster_path
      }
    )))
  }


  return (
    <div className="grid grid-flow-row h-screen">
      <Header />
      <div className="px-24 overflow-y-auto scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div>
          <TextButton to="/" title='Voltar' icon={FiArrowLeft} />
        </div>
        <div className="my-8">
          <TitleForm title='Novo filme' />
        </div>
        <form className="flex flex-col gap-10 mb-36">
          <div className="flex gap-10">
            <Input list='movie-title' placeholder="Título" type="text" onChange={fetchMovieTitle} />
            <datalist id="movie-title">
              {titleMovies ? titleMovies.map((movie, index) => {
                return <option key={index} value={movie.title} />
              }
              ) : <></>}
            </datalist>
            <select
              className="block  w-full bg-[#262529] text-[#948F99] p-4 rounded-lg focus:outline-none"
              placeholder='Sua nota'
              onChange={e => setRating(e.target.value)}
            >
              <option value={null}>Sua nota</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
          <div>
            <textarea
              rows={10}
              placeholder='Observações'
              className="resize-none w-full bg-[#262529] rounded-lg text-[#948F99] p-4 outline-none"
              onChange={e => setDescription(e.target.value)}
            />
          </div>
          <div>
            <TitleForm title='Marcadores' />
            <div className="bg-[#0D0C0F] flex flex-wrap rounded-lg gap-6 p-4 mt-6">
              {
                tags &&
                tags.map((tag, index) => (
                  <Marker
                    isNew={false}
                    value={tag}
                    key={index}
                    onClick={() => handleRemoveTag(tag)}
                  />
                ))
              }
              <Marker
                isNew={true}
                placeholder="Novo marcador"
                value={tagValue}
                onClick={handleAddTag}
                onChange={e => setTagValue(e.target.value)}
              />
            </div>
          </div>


          <div className="w-full h-[56px]">
            <Button title='Salvar' onClick={e => handleCreateNote(e)} />
          </div>

        </form>
      </div >
    </div >
  )
}