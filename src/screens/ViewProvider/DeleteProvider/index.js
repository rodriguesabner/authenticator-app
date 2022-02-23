import React, {useState} from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import {ButtonDelete, CircleRed, Description, Layout, Title} from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Backdrop from '../../../components/Backdrop';
import {api} from '../../../services/api';
import {useNavigation} from '@react-navigation/native';

const DeleteProvider = ({otpData, goBack, goNext}) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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

  async function onClickDelete() {
    setLoading(true);

    try {
      await api.delete('/provider/', {
        params: {
          issuer: otpData.issuer,
          label: otpData.label,
        },
      });

      goNext();
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <Layout>
      <Backdrop open={loading} />
      <StatusBar backgroundColor="#b43333" barStyle="light-content" />

      <View
        style={{
          position: 'absolute',
          top: 24,
          left: 24,
        }}>
        <Ionicons
          onPress={() => goBack()}
          name="ios-chevron-back"
          size={30}
          color="#999"
        />
      </View>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <CircleRed>
          <Ionicons name="ios-close" size={80} color="#FFF" />
        </CircleRed>
        <Title>Deletar "{otpData.issuer}"?</Title>
        <Description>
          Caso você realmente queira deletar o vínculo com o(a){' '}
          <Text style={{fontWeight: 'bold', color: '#000'}}>
            {otpData.issuer}
          </Text>
          , lembre-se de remover a autenticação no site.
        </Description>

        <Description style={{marginBottom: 0}}>Usuário vinculado:</Description>
        <Description style={{marginTop: 5, fontWeight: 'bold', color: '#000'}}>
          {otpData.label}
        </Description>
      </View>

      <View>
        <ButtonDelete onPress={() => onClickDelete()}>
          <Text style={{color: '#b25f5f', fontWeight: 'bold', fontSize: 18}}>
            Quero Deletar
          </Text>
        </ButtonDelete>

        <TouchableOpacity
          onPress={() => goToHome()}
          style={{
            padding: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 16,
          }}>
          <Text style={{color: '#666', fontSize: 18, fontWeight: 'bold'}}>
            Cancelar
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default DeleteProvider;
