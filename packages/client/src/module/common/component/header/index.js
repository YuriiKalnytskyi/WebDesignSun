import React from 'react';
import i18next from 'i18next';
import { useLocation } from 'react-router-dom';

import { HeaderConst } from '../../constants';

import logo from '../../../../assets/image/jpg/logo.jpg';
import arrowBottom from '../../../../assets/icon/arrow-bottom.svg';
import arrowRight from '../../../../assets/icon/arrow-right.svg';

import * as Styled from './header.styled';

export const Header = () => {
  const { pathname } = useLocation();

  // dynamic generation of HTML markup for the navigation menu
  const generationHTML = (data) => {
    return (
      <Styled.Menu>
        {data.map((value, index) => (
          <Styled.Li key={index} isColor={pathname === value.path} isIndex={value?.position === 0}>
            <Styled.A>{i18next.t(value.title)}</Styled.A>
            {value.description && (
              <Styled.Arrow
                style={{
                  WebkitMaskImage: `url(${value?.position === 0 ? arrowBottom : arrowRight})`,
                  WebkitMaskSize: '100% 100%',
                  maskImage: `url(${value?.position === 0 ? arrowBottom : arrowRight})`
                }}
              />
            )}
            {value.description && generationHTML(value.description)}
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

        <Styled.HelpContainer>
          {generationHTML(HeaderConst)}
          {/*jdjdj*/}
        </Styled.HelpContainer>
      </Styled.Content>
    </Styled.Container>
  );
};
