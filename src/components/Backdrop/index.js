import React from 'react';
import {Layout, Text} from './styles';
import {ActivityIndicator, StatusBar} from 'react-native';

const Backdrop = ({open}) => {
  return (
    open && (
      <Layout>
        <StatusBar backgroundColor="#111" barStyle="light-content" />

        <ActivityIndicator size={60} color={'#fff'} />
        <Text>Aguarde alguns segundos...</Text>
      </Layout>
    )
  );
};

export default Backdrop;
