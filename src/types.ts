import { ImageSourcePropType } from 'react-native';

export type Category = {
  key: string;
  description: string;
};

export type Hotel = {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: string;
  reviews: number;
  image: ImageSourcePropType;
  imageGradient?: ImageSourcePropType;
  details: string;
};
