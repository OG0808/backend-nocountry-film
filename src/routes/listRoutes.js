const { Router } = require('express')
const {
  getPopularMoviesHandler,
  getTopRatedHandler,
  getUpcomingHandler,
} = require('../handlers/listHandlers')

const listRouter = Router()

//PREV= http://localhost:4000/list

//TRAER PELICULAS POPULARES
listRouter.get('/popmovies', getPopularMoviesHandler)

//TRAER TOP RATED MOVIES
listRouter.get('/top', getTopRatedHandler)

//TRAER PROXIMOS ESTRENOS
listRouter.get('/upcomings', getUpcomingHandler)

module.exports = listRouter
