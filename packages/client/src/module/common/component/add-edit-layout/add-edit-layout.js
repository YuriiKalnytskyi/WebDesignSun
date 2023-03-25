import React from 'react';

import * as Styled from './add-edit-layout.styled';

import closeIcon from '../../../../assets/icon/closeIcon.svg';

export const AddEditLayout = ({ title, children, onCloseButtonClick }) => (
  <Styled.LayoutContainer>
    <Styled.IconContainer>
      <Styled.HeaderContentWrapper>
        <Styled.Title>{title}</Styled.Title>
      </Styled.HeaderContentWrapper>

      <Styled.CloseBtn
        onClick={onCloseButtonClick}
        style={{
          WebkitMaskImage: `url(${closeIcon})`,
          WebkitMaskSize: '100% 100%',
          maskImage: `url(${closeIcon})`
        }}
      />
    </Styled.IconContainer>

    <Styled.ContentContainer>{children}</Styled.ContentContainer>
  </Styled.LayoutContainer>
);
