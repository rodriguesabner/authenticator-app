import React from 'react';
import {Text, View} from 'react-native';
import {
  BottomContainer,
  ButtonPrimary,
  ButtonSecondary,
  Image,
  Layout,
  Title,
  WrapperTitle,
} from './styles';
import {useNavigation} from '@react-navigation/native';

const OnBoarding = () => {
  const navigation = useNavigation();

  const goToHomeScreen = () => {
    navigation.navigate('Main');
  };

  return (
    <Layout>
      <View>
        <Image
          source={require('../../assets/images/girl-3d-onboarding.png')}
          style={{resizeMode: 'contain'}}
        />
        <WrapperTitle>
          <Title>Todas as suas senhas</Title>
          <Title>em um único lugar</Title>
        </WrapperTitle>
      </View>
      <BottomContainer>
        <ButtonSecondary>
          <Text style={{color: '#999', fontWeight: 'bold', fontSize: 18}}>
            Pular
          </Text>
        </ButtonSecondary>

        <ButtonPrimary onPress={() => goToHomeScreen()}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Começar</Text>
        </ButtonPrimary>
      </BottomContainer>
    </Layout>
  );
};

export default OnBoarding;
