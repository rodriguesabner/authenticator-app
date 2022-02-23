import React from 'react';
import {Button, ButtonDelete, Layout, Provider, UserLabel} from './styles';
import {StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-ico';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailProvider = ({otpData, goToHome, goNext}) => {
  return (
    <Layout>
      <View
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
        }}>
        <Ionicons
          onPress={() => goToHome()}
          name="ios-chevron-back"
          size={30}
          color="#999"
        />
      </View>

      <StatusBar backgroundColor="#F2F4F6" barStyle="dark-content" />

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        {otpData.icon != null && (
          <Icon
            name={otpData.icon.name}
            group={otpData.icon.group}
            width={100}
            height={100}
          />
        )}
        <Provider>{otpData.issuer}</Provider>
        <UserLabel>{otpData.label}</UserLabel>

        <ButtonDelete onPress={() => goNext()}>
          <Ionicons
            name="ios-trash"
            size={22}
            color="#a42727"
            style={{marginRight: 10}}
          />
          <Text style={{color: '#a42727', fontWeight: 'bold', fontSize: 18}}>
            Deletar
          </Text>
        </ButtonDelete>
      </View>
    </Layout>
  );
};

export default DetailProvider;
