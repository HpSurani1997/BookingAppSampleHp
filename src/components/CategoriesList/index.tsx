import React, { memo, useEffect } from 'react';
import { ScrollViewProps } from 'react-native';
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { Category } from '../../types';
import * as S from './styles';

interface ICategoriesListProps extends ScrollViewProps {
  categories: Category[];
  selectedCategory: Category;
  onSelect: (categoryKey: string) => void;
}

const BOTTOM_BAR_WIDTH = 30;

const CategoriesList = memo(
  ({
    categories,
    selectedCategory,
    onSelect,
    ...rest
  }: ICategoriesListProps) => {
    const barWidth = useSharedValue(0);

    const handleCategoryClick = (categoryKey: string) => {
      barWidth.value = 0;

      onSelect(categoryKey);
    };

    useEffect(() => {
      barWidth.value = withTiming(BOTTOM_BAR_WIDTH, {
        duration: 200,
        easing: Easing.linear,
      });
    }, [barWidth, selectedCategory]);

    const barStyle = useAnimatedStyle(() => {
      return {
        width: barWidth.value,
      };
    });

    return (
      <S.Container {...rest}>
        {categories?.map((category, index) => {
          const isSelected = selectedCategory?.key === category.key;

          return (
            <S.CategoryOption
              key={category.key}
              testID={'categoryOption' + index}
              onPress={() => handleCategoryClick(category.key)}>
              <S.CategoryDescription isSelected={isSelected}>
                {category.description}
              </S.CategoryDescription>
              {!!isSelected && <S.CategorySelectionMark style={barStyle} />}
            </S.CategoryOption>
          );
        })}
      </S.Container>
    );
  },
);

export default CategoriesList;
