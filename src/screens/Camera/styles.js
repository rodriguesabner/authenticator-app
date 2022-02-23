import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: rgba(0, 0, 0, 0.5);
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  font-size: 36px;
  color: #fff;
`;

export const Description = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const BoxContainer = styled.View`
  width: 250px;
  height: 250px;
  margin-top: 36px;
  border-radius: 10px;
  border-width: 1px;
  border-color: #fff;
`;
