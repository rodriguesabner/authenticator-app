import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Fragments from '../../routes/fragment';

const Main = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Fragments />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    padding: 26,
    paddingBottom: 0,
    backgroundColor: '#f2f4f6',
  },
});

export default Main;
