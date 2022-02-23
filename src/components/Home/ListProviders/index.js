import React, {useEffect, useState} from 'react';
import {
  IconProvider,
  Layout,
  LeftContainer,
  ProviderEmail,
  ProviderInfo,
  ProviderName,
} from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-ico';
import {
  useCountdown,
  CountdownCircleTimer,
} from 'react-native-countdown-circle-timer';
import {api} from '../../../services/api';
import {useNavigation} from '@react-navigation/native';

const ListProviders = ({item}) => {
  const navigation = useNavigation();

  const [code, setCode] = useState('');
  const {remainingTime, elapsedTime} = useCountdown({
    isPlaying: true,
    duration: 30,
    colors: '#abc',
  });

  useEffect(() => {
    generateCode();

    return () => {
      setCode('');
    };
  }, [item.issuer, item.label]);

  async function generateCode() {
    const {data} = await api.post('/otp/generate-code', {
      issuer: item.issuer,
      label: item.label,
    });

    setCode(formatCode(data));
  }

  const formatCode = code => {
    const codeFirst = code.substring(0, 3);
    const codeSecond = code.substring(3, 6);
    return `${codeFirst} ${codeSecond}`;
  };

  const onFinishedCountdown = async () => {
    await generateCode();
  };

  const goToViewProvider = () => {
    navigation.navigate('ViewProvider', {
      issuer: item.issuer,
      label: item.label,
      remainingTime,
      elapsedTime,
      token: code,
      icon: item.icon,
    });
  };

  return (
    <TouchableOpacity onPress={() => goToViewProvider()}>
      <Layout>
        <LeftContainer>
          <IconProvider>
            <Icon name={item.icon.name} group={item.icon.group} />
          </IconProvider>
          <ProviderInfo>
            <ProviderName>{item.issuer}</ProviderName>
            <ProviderEmail>{item.label}</ProviderEmail>
            <Text style={{color: '#000', fontSize: 36, fontWeight: 'bold'}}>
              {code}
            </Text>
          </ProviderInfo>
        </LeftContainer>

        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <CountdownCircleTimer
            isPlaying
            duration={30}
            size={40}
            strokeWidth={5}
            colors={['#004777', '#F7B801', '#A30000', '#A30000']}
            colorsTime={[7, 5, 2, 0]}
            onComplete={() => {
              onFinishedCountdown();
              return {shouldRepeat: true, delay: 1.5}; // repeat animation in 1.5 seconds
            }}
          />
        </View>
      </Layout>
    </TouchableOpacity>
  );
};

export default ListProviders;
