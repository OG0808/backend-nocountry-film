require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getSeriesByGenres = async (idGenre, page) => {
  const { data } = await axios.get(
    `${API_URL}/3/discover/tv?language=es-ES&page=${
      page ?? 1
    }&with_genres=${idGenre}&api_key=${API_KEY}`
  )

  //https://api.themoviedb.org/3/discover/tv?language=es-ES&with_genres=10764&api_key=47b0b27c772507c4dc643efa1c279965

  const listOfSeries = mapLinksOnArray(data.results)

  return listOfSeries
}

module.exports = getSeriesByGenres
