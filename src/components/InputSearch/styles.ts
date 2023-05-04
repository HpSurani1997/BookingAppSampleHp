import styled from 'styled-components/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: ${({ theme }) => theme.border.radius}px;
`;

export const MagnifierIcon = styled(FontAwesomeIcon).attrs({
  icon: faSearch,
  size: 16,
  color: '#908e8c',
})`
  margin: 8px 12px;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 32px;
`;
