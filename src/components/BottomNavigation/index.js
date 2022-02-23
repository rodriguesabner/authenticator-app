import React from 'react';
import {View} from 'react-native';
import MaterialCmIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {Layout} from './styles';

const BottomNavigation = () => {
  const navigation = useNavigation();

  return (
    <Layout>
      <MaterialCmIcons name="view-dashboard" size={26} color={'#999'} />

      <MaterialCmIcons
        onPress={() => navigation.navigate('Camera')}
        name="qrcode-scan"
        size={40}
        color={'#000'}
      />

      <MaterialCmIcons name="database" size={26} color={'#999'} />
    </Layout>
  );
};

export default BottomNavigation;
