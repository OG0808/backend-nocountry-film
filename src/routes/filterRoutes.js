const { Router } = require('express')
const {
  getGenresHandler,
  getByGenreHandler,
} = require('../handlers/filterHandlers')

const filterRouter = Router()

//PREV = http://localhost:4000/filters

//TRAER GENEROS DE LA API
filterRouter.get('/genres', getGenresHandler)

//HACER PETICIONES A LA API CON EL GENERO APLICADO
filterRouter.get('/genre/:idGenre', getByGenreHandler)

module.exports = filterRouter
