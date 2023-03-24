import React from 'react';

import * as Styled from './footer.styled';
import i18next from 'i18next';

import point from '../../../../assets/icon/point.svg';
import letter from '../../../../assets/icon/letter.svg';
import phone from '../../../../assets/icon/phone.svg';

import logo2 from '../../../../assets/image/png/logo-footer.png';

export const Footer = () => {
  const bloc = [
    {
      title: 'common.bloc_1_title',
      description: [
        { text: 'common.bloc_1_text1' },
        { text: 'common.bloc_1_text2' },
        { text: 'common.bloc_1_text3' }
      ]
    },
    {
      title: 'common.bloc_2_title',
      description: [
        { text: 'common.bloc_2_text1' },
        { text: 'common.bloc_2_text2' },
        { text: 'common.bloc_2_text3' },
        { text: 'common.bloc_2_text4' }
      ]
    },
    {
      title: 'common.bloc_3_title',
      description: [
        { text: 'common.bloc_3_text1', icon: point },
        { text: 'common.bloc_3_text2', icon: letter },
        { text: 'common.bloc_3_text3', icon: phone }
      ]
    }
  ];

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.BlocContainer>
          {bloc.map((value, index) => (
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
