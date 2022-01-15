import axios from 'axios'

const baseURL = process.env.REACT_APP_BACKEND_IP
const token = localStorage.getItem('token')

const headers = {
  Authorization: '',
}

const instance = axios.create({
  baseURL,
  // headers,
})

instance.interceptors.request.use(config => {
  // config.headers.Authorization = `Bearer ${token}`
  config.url+= `?&access_token=${token}` || ''
  return config
})




export default instance
