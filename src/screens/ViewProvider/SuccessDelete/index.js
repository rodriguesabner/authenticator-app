import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import {ButtonDelete, CircleRed, Description, Layout, Title} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const SuccessDeleteProvider = ({otpData}) => {
  const navigation = useNavigation();

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
        <CircleRed>
          <Ionicons name="ios-checkmark" size={90} color="#FFF" />
        </CircleRed>
        <Title>Sucesso 🥳</Title>
        <Description>
          Você deletou o vínculo com o(a){' '}
          <Text style={{fontWeight: 'bold', color: '#000'}}>
            {otpData.issuer}
          </Text>
          .
        </Description>

        <Description style={{marginBottom: 0}}>Usuário vinculado:</Description>
        <Description style={{marginTop: 5, fontWeight: 'bold', color: '#000'}}>
          {otpData.label}
        </Description>
      </View>

      <View>
        <ButtonDelete onPress={() => goToHome()}>
          <Text style={{color: '#378A31FF', fontWeight: 'bold', fontSize: 18}}>
            Fechar
          </Text>
        </ButtonDelete>
      </View>
    </Layout>
  );
};

export default SuccessDeleteProvider;
