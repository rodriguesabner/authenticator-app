import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: #f2f4f6;
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  position: relative;
  padding: 24px;
`;

export const CircleRed = styled.View`
  background-color: #fd8c8c;
  border-radius: 500px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  margin-bottom: 36px;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #000;
  font-weight: bold;
  margin-top: 26px;
`;

export const Description = styled.Text`
  color: #777;
  margin-top: 10px;
  margin-bottom: 36px;
  text-align: center;
  font-size: 20px;
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
  background-color: #fff;
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
