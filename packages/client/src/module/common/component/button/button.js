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
  mr,
  startIcon,
  endIcon,
  widthIcon,
  marginIcon
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
      {startIcon && (
        <Styled.Icon
          style={{
            WebkitMaskImage: `url(${startIcon})`,
            WebkitMaskSize: '100% 100%',
            maskImage: `url(${startIcon})`
          }}
        />
      )}
      {content}

      {endIcon && (
        <Styled.Icon
          style={{
            WebkitMaskImage: `url(${endIcon})`,
            WebkitMaskSize: '100% 100%',
            maskImage: `url(${endIcon})`
          }}
        />
      )}
    </Styled.StyledButton>
  );
};
