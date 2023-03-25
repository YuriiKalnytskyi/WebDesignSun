import styled from 'styled-components';
import { SPACES, MEDIA } from '../../../../theme';

export const Container = styled.div`
  min-width: 300px;
  width: 100%;
  height: fit-content;

  @media screen and (max-width: ${MEDIA.tablet}) {
    min-width: 200px;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    min-width: 200px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 248px;

  margin-bottom: ${SPACES.xxxxl};
`;
