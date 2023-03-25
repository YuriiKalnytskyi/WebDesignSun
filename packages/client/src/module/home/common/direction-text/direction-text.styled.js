import styled from 'styled-components';
import { COLORS, FONTS } from '../../../../theme';

export const Text = styled.div`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  line-height: ${FONTS.SIZES.xxxxl};
  color: ${COLORS.accent};
`;
