import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../views/Home';
import HotelDetails from '../views/HotelDetails';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

const StackRoutes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="HotelDetails" component={HotelDetails} />
  </Stack.Navigator>
);

export default StackRoutes;
