import React, { useContext, useState } from 'react';

import * as S from './styles';
import { ThemeContext } from '../../hooks/theme';

interface HeaderProps {
  city?: string;
  sky?: string;
}

const Header: React.FC<HeaderProps> = ({ city, sky }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const { changeTheme, themeSwitchValue } = useContext(ThemeContext);

  return (
    <S.Container>
      <S.TextContainer>
        <S.Text sky={sky && sky}>{city}</S.Text>
      </S.TextContainer>
      <S.SwitchContainer>
        <S.Switch
          isEnabled={isEnabled}
          onValueChange={() => {
            setIsEnabled(!isEnabled);
            changeTheme && changeTheme();
          }}
          value={themeSwitchValue}
        />
      </S.SwitchContainer>
    </S.Container>
  );
};

export default Header;
