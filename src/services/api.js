import { KEY_TMDB, BASE_URL } from '../../env'
import axios from "axios";

export const api = axios.create({
  baseURL: BASE_URL
})

export const tmdbApi = axios.create({
  baseURL: `https://api.themoviedb.org/3/search/multi?api_key=${ KEY_TMDB }&language=pt-br&query=`
})

