import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:5000/api/scores',
})

export const addScore = (data) => API.post('/add', data)

export const getScores = (userId) => API.get(`/${userId}`)