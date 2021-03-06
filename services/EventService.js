import axios from 'axios'

const apiClient = axios.create({
  // baseURL: process.env.BASE_URL || 'http://localhost:3000',
  baseURL: process.env.BASE_URL || 'https://my-json-server.typicode.com/kathirr007/scale-vue-with-nuxt',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get(`/events`)
  },
  getEvent(id) {
    return apiClient.get(`/events/${id}`)
  },
}
