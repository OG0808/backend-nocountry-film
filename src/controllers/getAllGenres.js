require('dotenv').config()
const axios = require('axios')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getGenresMovies = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/genre/movie/list?language=es&api_key=${API_KEY}`
  )

  const filmGenres = data.genres

  return filmGenres
}

const getGenresTv = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/genre/tv/list?language=es&api_key=${API_KEY}`
  )

  const tvGenres = data.genres

  return tvGenres
}

module.exports = { getGenresMovies, getGenresTv }
