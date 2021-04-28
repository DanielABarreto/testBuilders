import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchLocation } from '../../store/modules';
import { RootState } from '../../store';
import * as S from './styles';
import Header from '../../components/header/header';
import Temperature from '../../components/temperature/temperature';
import { FlatList } from 'react-native';
import Forecast from '../../components/forecast/forecast';
import Error from '../error/error';
import translate from '../../locales';
import images from '../../constants/images';

const MainWeather = () => {
  const dispatch = useDispatch();

  const weatherInfo = useSelector(
    (state: RootState) => state.weather.weatherInfo,
  );

  const forecastInfo = useSelector(
    (state: RootState) => state.forecast.forecastInfo,
  );

  const weatherError = useSelector((state: RootState) => state.weather.error);

  const forecastError = useSelector((state: RootState) => state.forecast.error);

  const locationError = useSelector((state: RootState) => state.location.error);


  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  const messageError = () => {
    if (forecastError || weatherError) {
      return translate('messageErrorWeather');
    }
    return translate('messageErrorLocation');
  }

  const imageError = () => {
    if (forecastError || weatherError) {
      return images.imageError;
    }
    return images.imageErrorLocation;
  }

  return (
    <>
      {forecastError || weatherError || locationError ? (
        <Error message={messageError()} image={imageError()} />
      ) : (
        <S.Container sky={weatherInfo.weather && weatherInfo.weather[0].main}>
          <Header city={weatherInfo?.name} sky={weatherInfo.weather && weatherInfo.weather[0].main} />
          <Temperature
            temp={weatherInfo.main?.temp}
            tempMin={weatherInfo.main?.temp_min}
            tempMax={weatherInfo.main?.temp_max}
            sky={weatherInfo.weather && weatherInfo.weather[0].main}
          />
          <S.FlatListContainer>
            <FlatList
              data={forecastInfo}
              keyExtractor={(item, index) => `${item.dt_txt}${index}`}
              renderItem={({ item }) => {
                return (
                  <Forecast
                    tempMin={item.main?.temp_min}
                    tempMax={item.main?.temp_max}
                    icon={item.weather && item.weather[0].icon}
                    date={item.dt_txt}
                    sky={item.weather && item.weather[0].main}
                  />
                );
              }}
            />
          </S.FlatListContainer>
        </S.Container>
      )}
    </>
  );
};

export default MainWeather;
