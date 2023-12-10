require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org/'

const getPopulateByGenres = async (idGenre) => {
  const { data } = await axios.get(
    `${API_URL}/3/movie/popular?language=es-ES&with_genres=${idGenre}&api_key=${API_KEY}`
  )

  const listOfMovies = mapLinksOnArray(data.results)

  return listOfMovies
}

module.exports = getPopulateByGenres;