import { StatusBar } from 'react-native';
import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const currentStatusBarHeight = StatusBar.currentHeight || 0;

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 24px;
  padding-top: ${currentStatusBarHeight + 24}px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const CategoriesListContainer = styled.View`
  margin-top: 24px;
`;

export const HotelCardListContainer = styled.View`
  margin-vertical: 8px;
  margin-horizontal: -20px;
`;

export const TopHotelListContainer = styled.View`
  margin-top: 8px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const InputContainer = styled.View`
  margin-top: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
`;

export const PlaceTitle = styled.Text`
  color: ${({ theme }) => theme.colors.primary};
`;

export const TopHotelTitle = styled.Text`
  color: ${({ theme }) => theme.colors.grey};
  font-weight: 700;
  font-size: 14px;
`;

export const UserIcon = styled(FontAwesomeIcon).attrs({
  icon: faUser,
  size: 24,
  color: '#908e8c',
})`
  margin-top: 6px;
`;
