import styled from 'styled-components';
import { COLORS, SPACES, MEDIA } from '../../../../theme';

export const Container = styled.div`
  width: 70%;
  display: flex;
  background: ${COLORS.cards_BG};

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
    flex-direction: column;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Image = styled.img`
  height: 100%;
  aspect-ratio: 1 / 1;
`;

export const Content = styled.div`
  width: 100%;
  padding: ${SPACES.lxx} ${SPACES.xxxxl};
`;
