const mapLinksOnArray = (array) =>
  array.map((film) => {
    return {
      ...film,
      image: `https://image.tmdb.org/t/p/w500${film.backdrop_path}`,
    }
  })

const mapLinks = (film) => {
  return {
    ...film,
    image: `https://image.tmdb.org/t/p/w500${film.backdrop_path}`,
  }
}

module.exports = {
  mapLinks,
  mapLinksOnArray,
}
