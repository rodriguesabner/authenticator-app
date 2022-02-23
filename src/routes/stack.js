import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Main from '../screens/Main';
import OnBoarding from '../screens/OnBoarding';
import CameraScreen from '../screens/Camera';
import RegisterProvider from '../screens/RegisterProvider';
import ViewProvider from '../screens/ViewProvider';

const StackRoutes = createNativeStackNavigator();

const Stack = () => {
  return (
    <StackRoutes.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'none',
      }}
      initialRouteName={'OnBoarding'}>
      <StackRoutes.Screen name="Main" component={Main} />
      <StackRoutes.Screen name="OnBoarding" component={OnBoarding} />
      <StackRoutes.Screen name="Camera" component={CameraScreen} />
      <StackRoutes.Screen
        name="RegisterProvider"
        component={RegisterProvider}
      />
      <StackRoutes.Screen name="ViewProvider" component={ViewProvider} />
    </StackRoutes.Navigator>
  );
};

export default Stack;
