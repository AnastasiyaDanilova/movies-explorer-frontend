export const BASE_URL_MOVIES = 'https://api.nomoreparties.co/beatfilm-movies'

const checkServerResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status)
}

export const getMovies = () => {
  return fetch(`${BASE_URL_MOVIES}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
  }
  }).then((res) =>
    checkServerResponce(res)
  )
}