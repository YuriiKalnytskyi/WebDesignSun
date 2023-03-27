import styled from 'styled-components';
import { COLORS, SPACES, MEDIA } from '../../../../theme';

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.cards_BG};
  display: flex;
  margin-top: 72px;

  @media screen and (max-width: ${MEDIA.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 70%;
  height: 100%;

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 30%;
  padding: ${SPACES.lxx} ${SPACES.xxxxl};

  @media screen and (min-width: ${MEDIA.tablet}) {
    width: 100%;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
  }
  @media screen and (max-width: ${MEDIA.laptop}) {
    width: 100%;
  }
`;
