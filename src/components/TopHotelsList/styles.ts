import styled, {css} from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const standardLength = height;

export const Container = styled.ScrollView`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  ${({theme}) => css`
    box-shadow: 5px 5px 20px ${theme.colors.shadow};
    background-color: ${theme.colors.white};
  `}
`;

export const CardContainer = styled.ImageBackground`
  ${({theme}) => css`
    justify-content: space-between;
    margin-right: 20px;
    height: ${standardLength * 0.2}px;
    width: ${standardLength * 0.16}px;
    border-radius: ${theme.border.rounded}px;
    overflow: hidden;
  `}
`;

export const Rating = styled.View`
  ${({theme}) => css`
    width: 57%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    align-self: flex-end;
    padding: 8px;
    border-bottom-left-radius: ${theme.border.rounded}px;
    background-color: rgba(0, 0, 0, 0.3);
  `}
`;

export const RatingIcon = styled(FontAwesomeIcon).attrs({
  icon: faStar,
  size: 12,
})``;

export const RatingNumber = styled.Text`
  ${({theme}) => css`
    font-size: 18px;
    color: ${theme.colors.white};
    font-weight: 700;
    margin-left: 6px;
  `}
`;

export const DetailsSection = styled.View`
  ${({theme}) => css`
    background-color: ${theme.colors.white};
    padding: 0 8px;
    height: ${standardLength * 0.07}px;
  `}
`;

export const Title = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.dark};
    font-size: 10px;
    margin-top: 8px;
    margin-bottom: 2px;
    font-weight: 700;
  `}
`;

export const Location = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.grey};
    font-size: 10px;
  `}
`;
