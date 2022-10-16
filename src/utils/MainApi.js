// Напишите этот код на нативном JS, применяя fetch

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
}