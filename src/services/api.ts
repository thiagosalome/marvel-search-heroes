import axios from 'axios'

export default axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
  params: {
    apikey: process.env.REACT_APP_API_KEY
  }
})
