import Config from 'react-native-config';
import api from './api';

const getWeather = async (lat: string, long: string) => {
  try {
    const url = `weather?lat=${lat}&units=metric&lon=${long}&appid=${Config.API_KEY}`;
    const response = await api.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default getWeather;
