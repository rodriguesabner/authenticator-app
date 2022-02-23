import styled from 'styled-components/native';

export const Layout = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 5px 20px;
  border-radius: 10px;
  background: #fff;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconProvider = styled.View``;

export const ProviderInfo = styled.View`
  border-radius: 10px;
  padding: 10px;
  margin-left: 10px;
  flex-direction: column;
`;

export const ProviderName = styled.Text`
  color: #000;
  font-weight: 600;
  text-transform: lowercase;
`;

export const ProviderEmail = styled.Text`
  color: #999;
  font-size: 12px;
`;

export const WrapperButton = styled.View`
  background: #fff;
  position: relative;
  padding: 15px;
  margin-top: 36px;
  border-radius: 5px;
`;

export const Button = styled.TouchableOpacity`
  background: #fff;
  position: absolute;
  padding: 5px;
  top: -7px;
  left: 5px;
  border-width: 1px;
  border-radius: 7px;
`;
