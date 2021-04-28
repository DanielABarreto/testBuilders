import styled from 'styled-components/native';
interface SkyProps {
  sky?: string;
}
export const Container = styled.SafeAreaView<SkyProps>`
  flex: 1;
  justify-content: space-between;
  background-color: ${({ theme, sky }) => {
    switch (sky) {
      case 'Thunderstorm': {
        return theme.brands.purple;
      }
      case 'Drizzle': {
        return theme.brands.whiteSnow;
      }
      case 'Rain': {
        return theme.brands.grayRain;
      }
      case 'Snow': {
        return theme.brands.white;
      }
      case 'Clear': {
        return theme.brands.lightBlue;
      }
      case 'Clouds': {
        return theme.brands.blueSky;
      }
      default: {
        return theme.brands.blueSky;
      }
    }
  }};
`;

export const FlatListContainer = styled.SafeAreaView`
`;
