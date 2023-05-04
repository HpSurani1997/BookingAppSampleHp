import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
interface ICategoryOptionProps {
  isSelected: boolean;
}

export const Container = styled.ScrollView`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CategoryDescription = styled.Text<ICategoryOptionProps>`
  ${({ theme, isSelected }) => css`
    font-weight: 700;
    font-size: 14px;
    color: ${theme.colors.grey};

    ${!!isSelected &&
    css`
      color: ${theme.colors.primary};
    `}
  `}
`;

export const CategorySelectionMark = styled(Animated.View)`
  ${({ theme }) => css`
    margin-top: 2px;
    height: 3px;
    background-color: ${theme.colors.primary};
  `}
`;

export const CategoryOption = styled(RectButton).attrs({
  activeOpacity: 0.02,
})`
  margin-right: 16px;
`;
