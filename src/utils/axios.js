import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://693015c9778bbf9e006fc3d4.mockapi.io',
  headers: {'Content-Type': 'application/json'}
});

export default instance