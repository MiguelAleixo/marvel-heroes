import axios from 'axios';
import MARVEL_URL from '../constants/urls';

const api = axios.create({
  baseURL: MARVEL_URL,
});

export default api;
