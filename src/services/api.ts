import axios from 'axios';
import Config from 'react-native-config';

const api = axios.create({
  timeout: 30000,
  baseURL: Config.BASE_URL,
});

export default api;
