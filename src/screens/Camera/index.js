import React from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {StatusBar} from 'react-native';
import {BoxContainer, Description, Layout, Title} from './styles';
import {api} from '../../services/api';

const Camera = ({navigation}) => {
  const onSuccess = async e => {
    try {
      const {data} = await api.get('/otp/parse', {
        params: {
          otpuri: e.data,
        },
      });

      navigation.navigate('RegisterProvider', {
        otpData: JSON.stringify(data),
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <QRCodeScanner
      onRead={onSuccess}
      buttonPositive={'ok'}
      containerStyle={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
      }}
      cameraStyle={{
        flex: 1,
        height: '100%',
        backgroundColor: '#000',
      }}
      showMarker
      customMarker={
        <Layout>
          <StatusBar backgroundColor="#000" barStyle="light-content" />
          <Title>Capture o QR Code</Title>
          <Description>Capture o QR Code para pegar o código.</Description>
          <BoxContainer />
        </Layout>
      }
    />
  );
};

export default Camera;
