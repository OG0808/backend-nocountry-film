const { getGenresMovies, getGenresTv } = require('../controllers/getAllGenres')
const getByGenre = require('../controllers/getMoviesByGenre')

const getGenresHandler = async (req, res) => {
  const { tv } = req.query ///query para obtener los generos de tv "?tv=true" (con eso trae lo de la serie)..
  try {
    const genres = tv ? await getGenresTv() : await getGenresMovies()
    return res.status(200).json(genres)
  } catch (error) {
    return res.status(404).send(error)
  }
}

const getByGenreHandler = async (req, res) => {
  const { idGenre } = req.params
  try {
    const moviesFiltered = await getByGenre(idGenre)

    return res.status(200).json(moviesFiltered)
  } catch (error) {
    return res.status(404).send(error)
  }
}

module.exports = {
  getGenresHandler,
  getByGenreHandler,
}
