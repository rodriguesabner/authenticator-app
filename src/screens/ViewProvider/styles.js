import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: #f2f4f6;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  position: relative;
`;

export const Provider = styled.Text`
  font-size: 36px;
  color: #000;
  font-weight: bold;
  margin-top: 26px;
`;

export const UserLabel = styled.Text`
  font-size: 24px;
  color: #333;
  margin-top: 10px;
  margin-bottom: 36px;
`;

export const BoxContainer = styled.View`
  width: 250px;
  height: 250px;
  margin-top: 36px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;

export const Code = styled.Text`
  font-size: 48px;
  color: #000;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background-color: #1d38c0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 62px;
`;

export const ButtonDelete = styled.TouchableOpacity`
  width: 250px;
  height: 50px;
  background-color: #f1c0c0;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 62px;
`;
