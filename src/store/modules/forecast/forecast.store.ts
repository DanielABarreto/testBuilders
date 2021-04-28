import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, AppDispatch } from '../../index';
import getForecast from '../../../services/getForecast';
import uniqueDateArray from '../../../utils/uniqueDateArray';

interface ForecastProps {
  name?: string;
  dt_txt?: string;
  main?: {
    temp_min: number;
    temp_max: number;
  };
  weather?: {
    icon: string;
    main: string;
  }[];
}

const initialState: { forecastInfo: ForecastProps[]; error: boolean } = {
  forecastInfo: [],
  error: false,
};

const forecast = createSlice({
  name: 'forecast',
  initialState,

  reducers: {
    success(state, action: PayloadAction<ForecastProps[]>) {
      state.forecastInfo = action.payload;
    },

    error(state) {
      state.error = true;
    },
  },
});

export const { success, error } = forecast.actions;
export default forecast.reducer;

export const fetchForecast = (lat: string, long: string): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const response = await getForecast(lat, long);
    if (response.status === 200) {
      dispatch(success(uniqueDateArray(response.data)));
    } else {
      dispatch(error());
    }
  };
};
