import axios from 'axios';

const baseURL = process.env.REACT_APP_BACKEND_IP;

const headers = {
  // Authorization: '',
};
const token = localStorage.getItem('token');

export const instance = axios.create({
  baseURL,
  headers,
});

instance.interceptors.request.use((config) => {
  config.url += `?&access_token=${token}` || '';
  // config.headers!.Authorization = `Bearer ${token}`;

  return config;
});

// instance.interceptors.response.use(
//   config => config,
//   async error => {
//     const request = error.config
//     if (error.response.status === 401 && error.config && !error.config.isRetry) {
//       request.isRetry = true
//       await keycloak.updateToken(30).then(() => {
//         if (keycloak.idToken) {
//           localStorage.setItem('token', keycloak.idToken)
//         }
//       })
//       return instance.request(request)
//     }
//     throw error
//   }
// )
