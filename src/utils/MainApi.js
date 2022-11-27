const BASE_URL = 'https://api.diploma-movies.nomoredomains.xyz'

const checkServerResponce = (res) => {
  return res.ok ? res.json() : Promise.reject(res.status)
}

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name, email, password })
  }).then(res => checkServerResponce(res))
};

export const autorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  }).then(res => checkServerResponce(res))
};

export const checkToken = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    }
  }).then(res => checkServerResponce(res))
};

export const getProfile = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  }).then((res) =>
    checkServerResponce(res)
  )
}

export const updateProfile = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name,
      email
    })
  }).then((res) => checkServerResponce(res))
}

export const getSavedMovie = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json'
    }
  })
    .then((res) => checkServerResponce(res))
}

export const saveMovie = (country,
  director,
  duration,
  year,
  description,
  image,
  trailerLink,
  nameRU,
  nameEN,
  thumbnail,
  movieId) => {
  return fetch(`${BASE_URL}/movies`, {
      method: 'POST',
      headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              country,
              director,
              duration,
              year,
              description,
              image,
              trailerLink,
              nameRU,
              nameEN,
              thumbnail,
              movieId,
          })
  })
  .then((res) => checkServerResponce(res))
}

export const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
      method: 'DELETE',
      headers: {
          authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
          }
  })
  .then((res) => checkServerResponce(res))
}