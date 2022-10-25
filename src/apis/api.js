import axios from "axios"

const api = axios.create({
  baseURL: process.env.VUE_APP_SERVER_BASEURL
})

export default api
