import styled from 'styled-components/native';

interface TextProps {
  sky?: string;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const SideContainer = styled.View`
  width: 30%;
  align-items: center;
  justify-content: center;
  padding-left: 8px;
  padding-right: 8px;
`

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const MiddleContainer = styled.View`
  width: 40%;
  align-items: center;
  justify-content: center;
`

export const MiddleSkyContainer = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brands.lightGray};
  padding: 8px;
  border-radius: 24px;
`

export const MiddleText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 84px;
  text-align: center;
  color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Drizzle': {
        return theme.brands.black;
      }
      case 'Snow': {
        return theme.brands.black;
      }
      default: {
        return theme.brands.white;
      }
    }
  }};
`;

export const MiddleSubText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 25px;
  text-align: center;
  color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Drizzle': {
        return theme.brands.black;
      }
      case 'Snow': {
        return theme.brands.black;
      }
      default: {
        return theme.brands.white;
      }
    }
  }};
`;

export const MiddleSkyText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 25px;
  color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Drizzle': {
        return theme.brands.black;
      }
      case 'Snow': {
        return theme.brands.black;
      }
      default: {
        return theme.brands.white;
      }
    }
  }};
`;

export const SideTitle = styled.Text<TextProps>`
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 18px;
  text-align: center;
  color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Drizzle': {
        return theme.brands.black;
      }
      case 'Snow': {
        return theme.brands.black;
      }
      default: {
        return theme.brands.white;
      }
    }
  }};
`;

export const SideText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 50px;
  text-align: center;
  color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Drizzle': {
        return theme.brands.black;
      }
      case 'Snow': {
        return theme.brands.black;
      }
      default: {
        return theme.brands.white;
      }
    }
  }};
`;

export const SideSubText = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 25px;
  text-align: center;
  color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Drizzle': {
        return theme.brands.black;
      }
      case 'Snow': {
        return theme.brands.black;
      }
      default: {
        return theme.brands.white;
      }
    }
  }};
`;

