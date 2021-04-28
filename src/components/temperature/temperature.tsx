import React from 'react';
import translate from '../../locales';
import roundNumber from '../../utils/roundNumber';
import weatherConditions from '../../utils/weatherConditions';

import * as S from './styles';

interface HeaderProps {
  temp?: number;
  tempMin?: number;
  tempMax?: number;
  sky?: string;
}


const Temperature: React.FC<HeaderProps> = ({ temp, tempMin, tempMax, sky }) => {
  return (
    <S.Container>
      <S.SideContainer>
        <S.SideTitle>{translate('tempMin')}</S.SideTitle>
        <S.TextContainer>
          <S.SideText>{roundNumber(tempMin)}</S.SideText>
          <S.SideSubText>{translate('celsius')}</S.SideSubText>
        </S.TextContainer>
      </S.SideContainer>
      <S.MiddleContainer>
        <S.TextContainer>
          <S.MiddleText>{roundNumber(temp)}</S.MiddleText>
          <S.MiddleSubText>{translate('celsius')}</S.MiddleSubText>
        </S.TextContainer>
        <S.MiddleSkyContainer>
          <S.MiddleSkyText>{sky && weatherConditions(sky)}</S.MiddleSkyText>
        </S.MiddleSkyContainer>
      </S.MiddleContainer>
      <S.SideContainer>
        <S.SideTitle>{translate('tempMax')}</S.SideTitle>
        <S.TextContainer>
          <S.SideText>{roundNumber(tempMax)}</S.SideText>
          <S.SideSubText>{translate('celsius')}</S.SideSubText>
        </S.TextContainer>
      </S.SideContainer>
    </S.Container>
  );
};

export default Temperature;
