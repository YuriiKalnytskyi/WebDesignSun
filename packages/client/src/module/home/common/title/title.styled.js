import styled, { css } from 'styled-components';
import { COLORS, FONTS } from '../../../../theme';

export const Text = styled.div`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.xxxl};
  line-height: ${FONTS.SIZES.lxxs};
  color: ${COLORS.dark};

  ${({ component }) =>
    component &&
    css`
      &:hover {
        color: ${COLORS.accent};
        cursor: pointer;
      }
    `}
`;
