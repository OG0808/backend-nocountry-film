require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getTopRated = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}`
  )

  const topMovies = mapLinksOnArray(data.results)

  return topMovies
}

module.exports = {
  getTopRated,
}
