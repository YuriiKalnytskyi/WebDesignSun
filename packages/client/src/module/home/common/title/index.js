import React from 'react';

import * as Styled from './title.styled';

export const Title = ({ text, component = false }) => {
  return <Styled.Text component={component}>{text}</Styled.Text>;
};
