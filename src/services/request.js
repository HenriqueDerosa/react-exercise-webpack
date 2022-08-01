import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

const API_URL = process.env.API_URL
const API_KEY = process.env.API_KEY

const request = axios.create({
  baseURL: API_URL,
  params: {
    api_key: API_KEY,
  },
  transformResponse: [
    response => (response ? camelizeKeys(JSON.parse(response)) : response),
  ],
  transformRequest: [
    response => (response ? decamelizeKeys(JSON.parse(response)) : response),
  ],
})

export default request
