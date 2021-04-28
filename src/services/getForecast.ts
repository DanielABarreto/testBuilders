import Config from 'react-native-config';
import api from './api';

const getForecast = async (lat: string, long: string) => {
  try {
    const url = `forecast?lat=${lat}&lon=${long}&units=metric&cnt=27&appid=${Config.API_KEY}`;
    const response = await api.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export default getForecast;
