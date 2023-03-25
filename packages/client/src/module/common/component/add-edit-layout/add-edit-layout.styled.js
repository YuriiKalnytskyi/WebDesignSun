import styled from 'styled-components';

import { SPACES, FONTS, COLORS } from '../../../../theme';

export const LayoutContainer = styled.div`
  width: ${({ width }) => width ?? '22rem'};
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${SPACES.xxl} ${SPACES.l} ${SPACES.l} ${SPACES.l};
  font-family: ${FONTS.FAMILIES.poppins};
  background: ${COLORS.white};
  box-shadow: 0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03);
  overflow-y: auto;

  #giftIcon {
    position: inherit;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${SPACES.xxxxl};
`;

export const Title = styled.strong`
  display: block;
  width: 100%;
  font-weight: ${FONTS.WEIGHTS.semi_bold};
  font-size: ${FONTS.SIZES.xl};
  color: ${COLORS.dark};
`;

export const Text = styled.p`
  width: 100%;
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.dark};
`;

export const HeaderContentWrapper = styled.div`
  margin-left: ${SPACES.l};
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const CloseBtn = styled.div`
  margin: 0 0 0 auto;
  width: 1.5rem;
  height: 1.5rem;
  background: ${COLORS.dark};

  cursor: pointer;

  &:hover {
    background: ${COLORS.accent};
    transform: scale(0.8);
  }
`;
