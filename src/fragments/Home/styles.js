import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: #f2f4f6;
  flex: 1;
  flex-direction: column;
  position: relative;
`;

export const TitleSection = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: #000;
  text-transform: lowercase;
`;

export const FlatList = styled.FlatList`
  margin-top: 5px;
`;

export const SearchWrapper = styled.View`
  margin-bottom: 26px;
  padding: 0 20px;
  align-items: center;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border-color: #e8e8e8;
  border-width: 2px;
  border-radius: 6px;
`;

export const SearchBar = styled.TextInput`
  width: 100%;
  margin-left: 5px;
  color: #000;
`;
