import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  HotelDetailsScreeNavigationProp,
  HotelDetailsScreenRouteProp,
} from '../../routes/types';

import * as S from './styles';
import Rating from '../../components/Rating';

const HotelDetails = () => {
  const {
    params: { hotel },
  } = useRoute<HotelDetailsScreenRouteProp>();

  const navigate = useNavigation<HotelDetailsScreeNavigationProp>();

  const handleNavigateBack = () => {
    navigate.goBack();
  };

  return (
    <S.Container>
      <S.BackgroundImage
        source={hotel.imageGradient || hotel.image}
        resizeMode="cover">
        <S.Header>
          <TouchableOpacity testID='backBtn' activeOpacity={0.8} onPress={handleNavigateBack}>
            <S.BackIcon />
          </TouchableOpacity>
          <S.BookmarkIcon />
        </S.Header>
      </S.BackgroundImage>

      <S.LocationIconContainer>
        <S.LocationIcon />
      </S.LocationIconContainer>

      <S.ContentContainer>
        <S.Title>{hotel.name}</S.Title>
        <S.LocationName>{hotel.location}</S.LocationName>
        <Rating rating={hotel.rating} reviews={hotel.reviews} />

        <S.Description>{hotel.details}</S.Description>
      </S.ContentContainer>

      <S.PricingContainer>
        <S.PricingTitle>Price per night</S.PricingTitle>
        <S.PricingBackground>
          <S.Pricing>
            ${hotel.price} <S.PricingDetail>+ breakfest</S.PricingDetail>
          </S.Pricing>
        </S.PricingBackground>
      </S.PricingContainer>

      <S.BookButton>
        <S.BookButtonText>Book now</S.BookButtonText>
      </S.BookButton>
    </S.Container>
  );
};

export default HotelDetails;
