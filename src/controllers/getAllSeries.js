require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getAllSeries = async (page) => {
  const { data } = await axios.get(
    `${API_URL}/3/discover/tv?language=es-ES&page=${
      page ?? 1
    }&sort_by=popularity.desc&api_key=${API_KEY}`
  )
  const infoApi = mapLinksOnArray(data.results)

  return infoApi
}
module.exports = getAllSeries
