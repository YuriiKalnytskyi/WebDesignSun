import React from 'react';

import * as Styled from './button.styled';

export const Button = ({
  content,
  type,
  id,
  variant = 'primary',
  width,
  height,
  disabled,
  onClick,
  ml,
  mt,
  mb,
  mr
}) => {
  return (
    <Styled.StyledButton
      onClick={onClick}
      id={id}
      type={type ?? 'button'}
      ml={ml}
      mt={mt}
      mb={mb}
      mr={mr}
      width={width}
      height={height}
      disabled={disabled}
      variant={variant}
    >
      {content}
    </Styled.StyledButton>
  );
};
