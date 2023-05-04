import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

export const RatingContainer = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
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
  color: ${({ theme }) => theme.colors.grey};
  font-size: 11px;
`;

export const ReviewsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
