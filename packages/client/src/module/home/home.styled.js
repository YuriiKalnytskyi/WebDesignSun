import styled from 'styled-components';
import { COLORS, MEDIA } from '../../theme';

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.white};
  margin-top: 1px;
`;

export const Content = styled.div`
  width: 1320px;
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  margin: 0 auto;
  padding: 56px 0;

  @media screen and (max-width: ${MEDIA.tablet}) {
    flex-direction: column;
    width: 80%;
  }
  @media screen and (max-width: ${MEDIA.laptop}) {
    flex-direction: column;
     width: 80%;
  }
  @media screen and (max-width: ${MEDIA.laptop_m}) {
    // flex-direction: column;
    width: 80%;
  }
`;

export const PostsContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostsContent = styled.div`
  width: 100%;

  margin-top: 72px;
  margin-bottom: 88px;

  display: grid;
  flex-wrap: wrap;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 32.5%);
  grid-gap: 88px 8px;

  @media screen and (max-width: ${MEDIA.tablet}) {
    grid-template-columns: repeat(auto-fill, 48%);
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    grid-template-columns: repeat(auto-fill, 48%);
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    grid-template-columns: repeat(auto-fill, 40%);
  }
`;
