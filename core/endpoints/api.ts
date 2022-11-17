import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ENDPOINT_AUTH
})

export default api
