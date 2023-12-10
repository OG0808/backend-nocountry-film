require('dotenv').config()
const axios = require('axios')
const { mapLinksOnArray } = require('../utils/cleanFilms')
const { API_KEY } = process.env
const API_URL = 'https://api.themoviedb.org'

const getUpcomings = async () => {
  const { data } = await axios.get(
    `${API_URL}/3/movie/upcoming?language=en-US&page=1&api_key=${API_KEY}`
  )

  const upcomings = mapLinksOnArray(data.results)

  return upcomings
}

module.exports = {
  getUpcomings,
}
