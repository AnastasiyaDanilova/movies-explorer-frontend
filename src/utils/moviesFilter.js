export const moviesFilter = (allMovies, film, checkShorts) => {
  return allMovies.filter((movieCard) => {
    return !checkShorts ? movieCard.nameRU.toLowerCase().includes(film.toLowerCase()) : movieCard.nameRU.toLowerCase().includes(film.toLowerCase()) && movieCard.duration <= 40
  });
}