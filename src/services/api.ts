import axios from 'axios'

export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
})
