import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import ListProviders from '../../components/Home/ListProviders';
import {FlatList, Layout, SearchBar, SearchWrapper} from './styles';
import {api} from '../../services/api';
import BottomNavigation from '../../components/BottomNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const [providers, setProviders] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getProviders() {
      const {data} = await api.get('/provider');
      setProviders(data);
      setData(data);
    }

    getProviders();

    return () => {};
  }, []);

  const onSearchProvider = query => {
    const ret = data.filter(provider =>
      provider.issuer.toLowerCase().includes(query.toLowerCase()),
    );
    setProviders(ret);

    if (query === '') {
      setProviders(data);
    }
  };

  return (
    <Layout>
      <SearchWrapper>
        <Ionicons name="ios-search" size={20} color="#ccc" />

        <SearchBar
          placeholder={'Pesquisar'}
          placeholderTextColor={'#ccc'}
          selectionColor={'#000'}
          onChangeText={onSearchProvider}
        />
      </SearchWrapper>

      <View>
        {providers.length > 0 && (
          <FlatList
            overScrollMode={'never'}
            showsVerticalScrollIndicator={false}
            data={providers}
            renderItem={({item}) => <ListProviders item={item} />}
            ListFooterComponent={<View style={{paddingBottom: 80}} />}
          />
        )}
      </View>

      <BottomNavigation />
    </Layout>
  );
};

export default Home;
