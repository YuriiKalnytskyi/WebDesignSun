import styled from 'styled-components';
import { COLORS, SPACES, FONTS, MEDIA } from '../../../../theme';

export const Container = styled.div`
  width: 34%;
  padding-left: ${SPACES.xxxxl};

  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
    padding-left: 0;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
    padding-left: 0;
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    width: 100%;
    padding-left: 0;
  }
`;

export const Text = styled.div`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.lxx};
  line-height: 56px;
  color: ${COLORS.dark};
  margin-bottom: ${SPACES.l};
`;

export const Title = styled.div`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.xl};
  line-height: 27px;
  color: ${COLORS.white};
`;

export const Post = styled.div`
  width: 100%;
  height: 114.67px;

  cursor: pointer;

  padding: ${SPACES.l} ${SPACES.lxx};
  margin-bottom: ${SPACES.xxs};

  background-position: center;
  background-image: url(${(props) => props.image});

  background-blend-mode: multiply;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    background-color: ${COLORS.accent};
  }
`;
