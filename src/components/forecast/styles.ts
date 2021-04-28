import styled from 'styled-components/native';

interface TextProps {
  sky?: string
}

export const Container = styled.View`
  flex-direction: row;
  height: 60px;
`;

export const IconContainer = styled.View`
  width: 60px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.Image`
  width: 60px;
  height: 60px;
`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;
`;

export const TextRightContainer = styled.View`
  width: auto;
  justify-content: center;
`;

export const Text = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 18px;
  margin-right: 12px;
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
