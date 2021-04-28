import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.brands.lightBlue};
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 350px;
  height: 250px;
`;

export const TextContainer = styled.View`
  justify-content: center;
  margin-top: 12px;
`;

export const Text = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 24px;
  text-align: center;
  padding: 12px;
  color: ${({ theme }) => theme.brands.white};
`;
