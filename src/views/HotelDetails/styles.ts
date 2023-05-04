import styled, {css} from 'styled-components/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faArrowLeft,
  faMapMarkerAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import {Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');
const standardLength = height;

export const Container = styled.View`
  ${({theme}) => css`
    flex: 1;
    background-color: ${theme.colors.white};
  `}
`;

export const BackgroundImage = styled.ImageBackground`
  height: ${standardLength * 0.44}px;
  width: 100%;
  overflow: hidden;
  justify-content: space-between;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
  margin-horizontal: 24px;
`;

export const BookmarkIcon = styled(FontAwesomeIcon).attrs({
  icon: faBookmark,
  size: 24,
  color: '#FFF',
})`
  ${({theme}) => css`
    box-shadow: 10px 10px 20px ${theme.colors.dark};
    background-color: transparent;
  `}
`;

export const BackIcon = styled(FontAwesomeIcon).attrs({
  icon: faArrowLeft,
  size: 24,
  color: '#FFF',
})`
  ${({theme}) => css`
    box-shadow: 10px 10px 20px ${theme.colors.dark};
    background-color: transparent;
  `}
`;

export const LocationIconContainer = styled.View`
  ${({theme}) => css`
    align-items: center;
    justify-content: center;
    background-color: ${theme.colors.primary};
    border-radius: 50px;
    height: 55px;
    width: 55px;
    margin-top: -30px;
    margin-bottom: 10px;
    margin-right: 40px;
    align-self: flex-end;
    box-shadow: 2px 2px 7px ${theme.colors.grey};
    background-color: ${theme.colors.primary};
  `}
`;

export const LocationIcon = styled(FontAwesomeIcon).attrs({
  icon: faMapMarkerAlt,
  size: 24,
  color: '#FFF',
})``;

export const ContentContainer = styled.View`
  margin-horizontal: 24px;
  background-color: ${({theme}) => theme.colors.white};
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: 24px;
    color: ${theme.colors.dark};
    font-weight: 700;
  `}
`;

export const LocationName = styled.Text`
  ${({theme}) => css`
    font-size: 12px;
    color: ${theme.colors.grey};
    margin-top: 4px;
    margin-bottom: 16px;
  `}
`;

export const RatingContainer = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-top: 16px;
`;

export const RatingText = styled.Text`
  font-weight: 600;
  font-size: 12px;
  margin-left: 8px;
`;

export const RatingIcon = styled(FontAwesomeIcon).attrs({
  icon: faStar,
  size: 12,
})``;

export const Review = styled.Text`
  font-size: 11px;
  color: #9c9c9c;
`;

export const Description = styled.Text`
  ${({theme}) => css`
    margin-top: 24px;
    color: ${theme.colors.grey};
  `}
`;

export const PricingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

export const PricingTitle = styled.Text`
  font-size: 16px;
  font-weight: 600;
  padding-left: 24px;
`;

export const PricingBackground = styled.View`
  ${({theme}) => css`
    justify-content: center;
    align-items: center;
    background-color: rgba(82, 192, 180, 0.25);
    height: 40px;
    width: 200px;
    border-top-left-radius: ${theme.border.rounded}px;
    border-bottom-left-radius: ${theme.border.rounded}px;
  `}
`;

export const Pricing = styled.Text`
  font-size: 14px;
  font-weight: 600;
`;

export const PricingDetail = styled.Text`
  font-size: 12px;
`;

export const BookButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  ${({theme}) => css`
    margin-top: 24px;
    margin-horizontal: 24px;
    border-radius: ${theme.border.rounded}px;
    background-color: ${theme.colors.primary};
  `}
`;

export const BookButtonText = styled.Text`
  ${({theme}) => css`
    color: ${theme.colors.white};
    align-self: center;
    padding-vertical: 16px;
    font-weight: 600;
    font-size: 14px;
  `}
`;
