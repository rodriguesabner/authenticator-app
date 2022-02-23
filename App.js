import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';
import {Routes} from './src/routes';
import Spinner from 'react-native-loading-spinner-overlay';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor={'#f2f4f6'} />
      <Routes />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
});

export default App;
