import styled, { DefaultTheme } from 'styled-components/native';

interface SwitchProps {
  isEnabled?: boolean;
  trackColor?: {
    false: string;
    true: string;
  };
  thumbColor?: string;
  theme?: DefaultTheme;
  ios_backgroundColor?: string;
}

interface TextProps {
  sky?: string
}

export const Container = styled.SafeAreaView`
  flex-direction: row;
`;

export const SwitchContainer = styled.View`
  width: 60px;
  height: 100%;

`;

export const TextContainer = styled.View`
  flex: 1;
  justify-content: center;

`;

export const Text = styled.Text<TextProps>`
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

export const Switch = styled.Switch.attrs((props: SwitchProps) => ({
  ios_backgroundColor: props.ios_backgroundColor || props.theme?.brands.darkBlue,
  trackColor: props.trackColor || {
    false: props.theme?.brands.darkBlue, true: props.theme?.brands.darkBlue
  },
  thumbColor: props.thumbColor || props.isEnabled ? props.theme?.brands.gold : props.theme?.brands.gold,
})) <SwitchProps>`
  transform: scaleX(.8) scaleY(.8);
  border: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.brands.white}
`;

