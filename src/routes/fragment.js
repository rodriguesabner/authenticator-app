import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../fragments/Home';

const Tab = createNativeStackNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName={'Home'}>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export default AppTabs;
