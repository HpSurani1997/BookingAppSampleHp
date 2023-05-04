import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

import { Hotel } from '../types';

export type StackParamList = {
  Home: undefined;
  HotelDetails: { hotel: Hotel };
};

export type HomeScreeNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'Home'
>;

export type HotelDetailsScreeNavigationProp = NativeStackNavigationProp<
  StackParamList,
  'HotelDetails'
>;

export type HotelDetailsScreenRouteProp = RouteProp<
  StackParamList,
  'HotelDetails'
>;
