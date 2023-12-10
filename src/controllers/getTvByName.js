require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getShowByName = async (inputName, page) => {
  const { data } = await axios.get(
    `${API_URL}/3/search/tv?language=es-ES&page=${
      page ?? 1
    }&query=${inputName}&api_key=${API_KEY}`
  )

  const cleanCode = mapLinksOnArray(data.results)
  return cleanCode
}

module.exports = getShowByName
