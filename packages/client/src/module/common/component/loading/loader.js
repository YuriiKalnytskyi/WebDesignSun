import React from 'react';

import * as Styled from './loading.styled';

export const Loader = ({ size, margin, className, id, ...restProps }) => (
  <Styled.MyContainer id={id} margin={margin} className={className}>
    <Styled.LoaderStyle size={size ?? 'medium'} {...restProps} />
  </Styled.MyContainer>
);
