import React from 'react';
import i18next from 'i18next';
import { useLocation } from 'react-router-dom';

import { HeaderConst } from '../../constants';

import logo from '../../../../assets/image/jpg/logo.jpg';
import arrowBottom from '../../../../assets/icon/arrow-bottom.svg';
import arrowLeft from '../../../../assets/icon/arrow-left.svg';

import * as Styled from './header.styled';

export const Header = () => {
  const { pathname } = useLocation();

  // dynamic generation of HTML markup for the navigation menu
  const generationHTML = (data, position = 0) => {
    return (
      <Styled.Menu isIndex={position === 0}>
        {data.map((value, index) => (
          <Styled.Li key={index} isColor={pathname === value.path} isIndex={value?.position === 0}>
            <Styled.A>{i18next.t(value.title)}</Styled.A>
            {value.description && (
              <Styled.Arrow
                style={{
                  WebkitMaskImage: `url(${value?.position === 0 ? arrowBottom : arrowLeft})`,
                  WebkitMaskSize: '100% 100%',
                  maskImage: `url(${value?.position === 0 ? arrowBottom : arrowLeft})`
                }}
              />
            )}
            {value.description && generationHTML(value.description, value?.position)}
          </Styled.Li>
        ))}
      </Styled.Menu>
    );
  };
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.HelpLogo>
          <img src={logo} alt={'logo'} />
          <Styled.HelpContainer>
            <Styled.HelpText>{i18next.t('common.help_text')}</Styled.HelpText>
            <Styled.HelpPhone>{i18next.t('common.help_phone')}</Styled.HelpPhone>
          </Styled.HelpContainer>
        </Styled.HelpLogo>

        <Styled.NavContainer>{generationHTML(HeaderConst)}</Styled.NavContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
