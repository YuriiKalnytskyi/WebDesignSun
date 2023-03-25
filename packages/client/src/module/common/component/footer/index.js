import React from 'react';

import * as Styled from './footer.styled';
import i18next from 'i18next';

import logo2 from '../../../../assets/image/png/logo-footer.png';
import { FooterConst } from '../../constants';

export const Footer = () => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.BlocContainer>
          {FooterConst.map((value, index) => (
            <Styled.Bloc key={index}>
              <Styled.BlocTitle>{i18next.t(value.title)}</Styled.BlocTitle>

              {value.description.map((v, i) => (
                <div key={i} style={{ display: 'flex' }}>
                  <Styled.BlocText>
                    {v.icon && (
                      <Styled.Icon
                        style={{
                          WebkitMaskImage: `url(${v.icon})`,
                          WebkitMaskSize: '100% 100%',
                          maskImage: `url(${v.icon})`
                        }}
                      />
                    )}

                    {i18next.t(v.text)}
                  </Styled.BlocText>
                </div>
              ))}
            </Styled.Bloc>
          ))}

          <Styled.Bloc>
            <Styled.Logo src={logo2} alt={'logo'} />
            <Styled.Text>{i18next.t('common.text_logo')}</Styled.Text>
          </Styled.Bloc>
        </Styled.BlocContainer>

        <Styled.Text>{i18next.t('common.text')}</Styled.Text>
      </Styled.Content>
    </Styled.Container>
  );
};
