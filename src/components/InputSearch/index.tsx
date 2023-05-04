import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface IInputSearchProps extends TextInputProps {}

const InputSearch = ({ ...rest }: IInputSearchProps) => {
  return (
    <S.Container>
      <S.MagnifierIcon />
      <S.Input {...rest} />
    </S.Container>
  );
};

export default InputSearch;
