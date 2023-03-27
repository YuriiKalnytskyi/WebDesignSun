import styled from 'styled-components';
import { COLORS, FONTS, MEDIA, SPACES } from '../../../../theme';

export const Container = styled.div`
  width: 100%;
  height: 6rem;
  background: ${COLORS.white};
  margin: 0 auto;

  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.100361);
`;

export const Content = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${MEDIA.tablet_s}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    flex-direction: column;
    align-items: flex-start;
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const HelpLogo = styled.div`
  display: flex;
  padding: ${SPACES.xxl} 0;
`;

export const HelpContainer = styled.div`
  height: 100%;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: ${MEDIA.tablet_s}) {
    width: 100%;
    margin-left: 0px;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    width: 100%;
    margin-left: 0px;
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const HelpText = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.s};
  line-height: ${FONTS.SIZES.l};
  color: ${COLORS.secondary_Text};
`;

export const HelpPhone = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.xxxl};
  line-height: ${FONTS.SIZES.xxxxl};
  color: ${COLORS.dark};
`;

export const Menu = styled.ul`
  display: flex;
  height: 100%;

  & ul {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    padding: 0;

    & ul {
      display: none;
      top: 0;
      left: 88%;
    }
  }

  & li:hover > ul {
    display: block;
    padding: 12px 14px;

    & li {
      min-width: 150px;
      padding: 12px 14px;
      height: fit-content;
      box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.100361);
      background-color: ${COLORS.white};
      border-bottom: 1px solid ${COLORS.cards_BG};

      & a {
        color: ${COLORS.dark};
        display: flex;
        align-items: center;
        text-align: left;
      }

      & a:hover {
        color: ${COLORS.accent};
      }

      & div {
        background-color: ${COLORS.dark};
      }

      &:hover {
        & div {
          background-color: ${COLORS.accent};
        }
      }
    }
  }
`;

export const A = styled.a`
  text-decoration: none;
  display: block;
  text-align: center;

  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.m};
  line-height: ${FONTS.SIZES.xxxxl};

  color: ${COLORS.dark};

  display: flex;
  align-items: flex-start;

  &:hover {
    color: ${COLORS.accent};
  }
`;

export const Li = styled.li`
  width: fit-content;
  height: 100%;
  cursor: pointer;

  margin-left: 24px;

  @media screen and (max-width: ${MEDIA.tablet_s}) {
    margin-left: 0px;
    margin-right: 20px;
  }

  @media screen and (max-width: ${MEDIA.tablet}) {
    margin-left: 0px;
    margin-right: 10px;
  }

  @media screen and (max-width: ${MEDIA.laptop}) {
    margin-left: 0px;
    margin-right: 10px;
  }

  display: flex;
  align-items: center;
  text-align: left;

  list-style: none;
  position: relative;

  border-bottom: ${(props) => (props.isColor ? `3px solid ${COLORS.accent}` : '')};

  & a {
    color: ${(props) => (props.isColor ? COLORS.accent : COLORS.dark)};
  }

  &:hover {
    border-bottom: ${(props) => (props.isIndex ? `3px solid ${COLORS.accent}` : '')};

    & a {
      color: ${COLORS.accent};
    }

    & div {
      background-color: ${COLORS.accent};
    }
  }
`;

export const Arrow = styled.div`
  width: 10px;
  height: 6px;
  margin-left: 3px;

  background-color: ${COLORS.dark};
`;
