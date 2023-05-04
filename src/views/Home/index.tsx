import React, { useState } from 'react';

import CategoriesList from '../../components/CategoriesList';
import InputSearch from '../../components/InputSearch';
import HotelCardList from '../../components/HotelCardList';
import TopHotelList from '../../components/TopHotelsList';

import { Category } from '../../types';
import * as S from './styles';

import hotelMocks from '../../mocks/hotels';

const CATEGORIES: Category[] = [
  {
    description: 'All Places',
    key: 'ALL',
  },
  {
    description: 'Popular',
    key: 'POPULAR',
  },
  {
    description: 'Top Rated',
    key: 'TOP_RATED',
  },
  {
    description: 'Featured',
    key: 'FEATURED',
  },
  {
    description: 'Luxury',
    key: 'LUXURY',
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    CATEGORIES[0],
  );

  const handleCategoryClick = (categoryKey: string) => {
    const categoryClicked = CATEGORIES.find(
      category => category.key === categoryKey,
    ) as Category;

    setSelectedCategory(categoryClicked);
  };

  return (
    <S.Container>
      <S.Header>
        <S.Title>
          Find your hotel {'\n'}in <S.PlaceTitle>Bhavnagar</S.PlaceTitle>
        </S.Title>
        <S.UserIcon />
      </S.Header>

      <S.InputContainer>
        <InputSearch placeholder="Search" />
      </S.InputContainer>

      <S.CategoriesListContainer>
        <CategoriesList
          horizontal
          showsHorizontalScrollIndicator={false}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
          categories={CATEGORIES}
          onSelect={handleCategoryClick}
          selectedCategory={selectedCategory}
        />
      </S.CategoriesListContainer>

      <S.HotelCardListContainer>
        <HotelCardList
          horizontal
          showsHorizontalScrollIndicator={false}
          hitSlop={{ bottom: 5, left: 5, right: 5, top: 5 }}
          hotelList={hotelMocks}
        />
      </S.HotelCardListContainer>

      <S.TopHotelListContainer>
        <S.TopHotelTitle>Top hotels</S.TopHotelTitle>
        <TopHotelList />
      </S.TopHotelListContainer>
    </S.Container>
  );
};

export default Home;
