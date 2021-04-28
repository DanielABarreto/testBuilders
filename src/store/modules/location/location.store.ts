import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import RNLocation from 'react-native-location';
import { AppThunk, AppDispatch } from '../../index';
import { fetchWeather } from '../';
import { fetchForecast } from '../';

RNLocation.configure({
  distanceFilter: 0,
});

interface LocationProps {
  longitude?: number;
  latitude?: number;
}

const initialState: { locationInfo: LocationProps; error: boolean } = {
  locationInfo: {},
  error: false,
};

const location = createSlice({
  name: 'location',
  initialState,

  reducers: {
    success(state, action: PayloadAction<LocationProps>) {
      state.locationInfo = action.payload;
    },

    error(state) {
      state.error = true;
    },
  },
});

export const { success, error } = location.actions;
export default location.reducer;

export const fetchLocation = (): AppThunk => {
  return async (dispatch: AppDispatch) => {
    const permission = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse',
        rationale: {
          title: 'We need to access your location',
          message: 'We use your location to show where you are on the map',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    });

    const latestLocation = await RNLocation.getLatestLocation({
      timeout: 1000,
    });

    if (permission && latestLocation) {
      dispatch(
        fetchWeather(
          String(latestLocation.latitude),
          String(latestLocation.longitude),
        ),
      );
      dispatch(
        fetchForecast(
          String(latestLocation.latitude),
          String(latestLocation.longitude)
        )
      );
      dispatch(success(latestLocation));
    } else {
      dispatch(error());
    }
  };
};
