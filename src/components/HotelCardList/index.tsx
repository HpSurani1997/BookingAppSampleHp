import React, { useCallback } from 'react';
import {
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollViewProps,
} from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

import HotelCard from '../HotelCard';
import { Hotel } from '../../types';
import { HomeScreeNavigationProp } from '../../routes/types';

import * as S from './styles';
const { height, width } = Dimensions.get("window");
const standardLength = height;

const LAST_CARD_PADDING = 100;
const CARD_WIDTH_OFFSET = standardLength * 0.3;
interface IHotelCardListProps extends ScrollViewProps {
  hotelList: Hotel[];
}

const HotelCardList = ({ hotelList, ...rest }: IHotelCardListProps) => {
  const scrollX = useSharedValue(0);
  const navigate = useNavigation<HomeScreeNavigationProp>();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    scrollX.value = event.nativeEvent.contentOffset.x;
  };

  const handleHotelClick = useCallback(
    (hotel: Hotel) => {
      navigate.navigate('HotelDetails', { hotel });
    },
    [navigate],
  );

  return (
    <S.Container
      testID={'scrollView'}
      scrollEventThrottle={16}
      snapToInterval={CARD_WIDTH_OFFSET}
      disableScrollViewPanResponder={false}
      disableIntervalMomentum
      contentContainerStyle={{
        paddingRight: CARD_WIDTH_OFFSET - LAST_CARD_PADDING,
      }}
      onScroll={handleScroll}
      {...rest}>
      {hotelList.map((hotel, itemIndex) => (
        <HotelCard
          key={hotel.id}
          hotel={hotel}
          itemIndex={itemIndex}
          scrollX={scrollX}
          handleClick={handleHotelClick}
        />
      ))}
    </S.Container>
  );
};

export default HotelCardList;
