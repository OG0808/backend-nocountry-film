require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env

//https://api.themoviedb.org/3/movie/popular?api_key=47b0b27c772507c4dc643efa1c279965
const getPopMovies = async () => {
  const { data } = await axios.get(
    // `${API_URL}/3/movie/popular?api_key=${API_KEY}`
    'https://api.themoviedb.org/3/movie/popular?api_key=47b0b27c772507c4dc643efa1c279965'
  )

  const infoApi = mapLinksOnArray(data.results)

  return infoApi
}
module.exports = {
  getPopMovies,
}
