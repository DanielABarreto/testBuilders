import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../index';
import getWeather from '../../../services/getWeather';

interface WeatherProps {
  main?: WeatherMainProps;
  name?: string;
  weather?: WeatherSkyProps[];
}

interface WeatherMainProps {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface WeatherSkyProps {
  main: string;
}

const initialState: { weatherInfo: WeatherProps; error: boolean } = {
  weatherInfo: {},
  error: false,
};

const weather = createSlice({
  name: 'weather',
  initialState,

  reducers: {
    success(state, action: PayloadAction<WeatherProps>) {
      state.weatherInfo = action.payload;
    },

    error(state) {
      state.error = true;
    },
  },
});

export const { success, error } = weather.actions;
export default weather.reducer;

export const fetchWeather = (lat: string, long: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const response = await getWeather(lat, long);
    if (response.status === 200) {
      dispatch(success(response.data));
    } else {
      dispatch(error());
    }
  };
};
