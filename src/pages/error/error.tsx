import React from 'react';
import { ImageSourcePropType } from 'react-native';

import * as S from './styles';

interface ErrorProps {
  message: string;
  image: ImageSourcePropType;
}

const Forecast: React.FC<ErrorProps> = ({ message, image }) => {
  return (
    <S.Container>
      <S.ImageContainer>
        <S.Image source={image} resizeMode="stretch" />
      </S.ImageContainer>
      <S.TextContainer>
        <S.Text>{message}</S.Text>
      </S.TextContainer>
    </S.Container>
  );
};

export default Forecast;
