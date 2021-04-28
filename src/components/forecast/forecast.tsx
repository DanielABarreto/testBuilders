import React from 'react';
import translate from '../../locales';
import roundNumber from '../../utils/roundNumber';
import weatherConditions from '../../utils/weatherConditions';

import * as S from './styles';

interface ForecastProps {
  tempMin?: number;
  tempMax?: number;
  icon?: string;
  date?: string;
  sky?: string;
}


const Forecast: React.FC<ForecastProps> = ({ tempMin, tempMax, icon, date, sky }) => {
  const getDateLabel = () => {
    const dateSplit = date?.split(/ (.*)/);
    return dateSplit && dateSplit[0];
  }

  return (
    <S.Container>
      <S.IconContainer>
        <S.Icon source={{ uri: `https://openweathermap.org/img/wn/${icon}.png` }} />
      </S.IconContainer>
      <S.TextContainer>
        <S.Text>{`${getDateLabel()} - ${weatherConditions(sky && sky)}`}</S.Text>
      </S.TextContainer>
      <S.TextRightContainer>
        <S.Text>{`${roundNumber(tempMin)}${translate('celsius')} / ${roundNumber(tempMax)}${translate('celsius')}`}</S.Text>
      </S.TextRightContainer>
    </S.Container>
  );
};

export default Forecast;
