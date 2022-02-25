import React, {useEffect, useState} from 'react';
import {StatusBar, Text, View} from 'react-native';
import {Button, Code, Layout, Provider, UserLabel} from './styles';
import Icon from 'react-native-ico';

const RegisterProvider = ({route, navigation}) => {
  const [otpData, setOtpData] = useState({});

  useEffect(() => {
    if (route.params) {
      const data = JSON.parse(route.params.otpData);
      setOtpData(data);
    }

    return () => {};
  }, [route.params]);

  const goToHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Main',
          screen: 'Home',
        },
      ],
    });
  };

  return (
    <Layout>
      <StatusBar backgroundColor="#F2F4F6" barStyle="dark-content" />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {otpData.icon && (
          <Icon
            name={otpData.icon.name}
            group={otpData.icon.group}
            width={100}
            height={100}
          />
        )}
        <Provider>{otpData.issuer}</Provider>
        <UserLabel>{otpData.label}</UserLabel>

        <Code>{otpData.token}</Code>
      </View>

      <Button onPress={() => goToHome()}>
        <Text style={{color: '#fff', fontWeight: 'bold'}}>Fechar</Text>
      </Button>
    </Layout>
  );
};

export default RegisterProvider;
