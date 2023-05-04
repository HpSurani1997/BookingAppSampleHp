import Animated from 'react-native-reanimated';
import {Dimensions} from 'react-native';
import styled, { css } from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';

const { height, width } = Dimensions.get("window");
const standardLength = height;

export const AnimatedContainer = styled(Animated.View)`
  ${({ theme }) => css`
    box-shadow: 5px 5px 20px ${theme.colors.shadow};
    background-color: ${theme.colors.white};
  `}
`;

export const Container = styled.ImageBackground`
  ${({ theme }) => css`
    height: ${standardLength * 0.4}px;
    width: ${standardLength * 0.3}px;
    border-radius: ${theme.border.rounded}px;
    overflow: hidden;
    justify-content: space-between;
  `}
`;

export const Name = styled.Text`
  font-weight: 600;
  font-size: 14px;
`;

export const Location = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 11px;
  margin-top: 2px;
`;

export const PriceContainer = styled.View`
  ${({ theme }) => css`
    height: ${standardLength * 0.08}px;
    width: ${standardLength * 0.12}px;
    background-color: ${theme.colors.primary};
    border-bottom-left-radius: ${theme.border.rounded}px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
  `}
`;

export const Price = styled.Text`
  font-size: 19px;
  font-weight: 800;
  color: ${({ theme }) => theme.colors.white};
`;

export const DetailsContainer = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    height: ${standardLength * 0.14}px;
    border-top-left-radius: ${theme.border.rounded}px;
    border-top-right-radius: ${theme.border.rounded}px;
    width: 100%;
    padding: 16px;
    justify-content: space-between;
  `}
`;

export const DetailsContainerTitle = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const BookmarkIcon = styled(FontAwesomeIcon).attrs({
  icon: faBookmark,
  size: 20,
  color: '#52c0b4',
})``;
