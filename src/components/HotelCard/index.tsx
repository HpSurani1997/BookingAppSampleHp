import React from 'react';
import {Dimensions, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

import Rating from '../Rating';

import {Hotel} from '../../types';

import * as S from './styles';
interface IHotelCardProps {
  hotel: Hotel;
  itemIndex: number;
  scrollX: Animated.SharedValue<number>;
  handleClick: (hotel: Hotel) => void;
}
const {height, width} = Dimensions.get('window');
const standardLength = height;

const CARD_WIDTH_OFFSET = standardLength * 0.32;

const HotelCard = ({
  hotel,
  itemIndex,
  handleClick,
  scrollX,
}: IHotelCardProps) => {
  const inputRange = [
    (itemIndex - 1) * CARD_WIDTH_OFFSET,
    itemIndex * CARD_WIDTH_OFFSET,
    (itemIndex + 1) * CARD_WIDTH_OFFSET,
  ];

  const cardStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollX.value, inputRange, [0.5, 1, 0.5]),
      transform: [
        {
          scale: interpolate(scrollX.value, inputRange, [0.8, 1, 0.8]),
        },
      ],
    };
  });

  return (
    <TouchableOpacity
      testID={'hotelItem' + itemIndex}
      activeOpacity={0.8}
      onPress={() => handleClick(hotel)}>
      <S.AnimatedContainer style={cardStyle}>
        <S.Container source={hotel.image} resizeMode="cover">
          <S.PriceContainer>
            <S.Price>$ {hotel.price}</S.Price>
          </S.PriceContainer>

          <S.DetailsContainer>
            <S.DetailsContainerTitle>
              <View>
                <S.Name>{hotel.name}</S.Name>
                <S.Location>{hotel.location}</S.Location>
              </View>
              <S.BookmarkIcon />
            </S.DetailsContainerTitle>
            <Rating reviews={hotel.reviews} rating={hotel.rating} />
          </S.DetailsContainer>
        </S.Container>
      </S.AnimatedContainer>
    </TouchableOpacity>
  );
};

export default HotelCard;
