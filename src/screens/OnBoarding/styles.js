import styled from 'styled-components/native';

export const Layout = styled.SafeAreaView`
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  background-color: #f2f4f6;
`;

export const Image = styled.Image`
  width: 90%;
  height: 400px;
  margin: 0 auto;
`;

export const WrapperTitle = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
`;

export const BottomContainer = styled.View`
  width: 100%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const ButtonPrimary = styled.TouchableOpacity`
  height: 50px;
  background-color: #1ea4f5;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 30%;
`;

export const ButtonSecondary = styled.TouchableOpacity`
  height: 50px;
  justify-content: center;
  align-items: center;
  width: 30%;
`;
