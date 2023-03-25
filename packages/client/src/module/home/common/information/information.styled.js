import styled from 'styled-components';
import { COLORS, FONTS, SPACES } from '../../../../theme';

export const Container = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Text = styled.div`
  display: flex;
  align-items: center;

  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.s};
  line-height: ${FONTS.SIZES.l};
  color: ${(props) => props.color};
  margin-right: ${SPACES.xxs};
`;

export const Icon = styled.div`
  width: 12px;
  height: 12px;

  margin-right: ${SPACES.xxxss};
  margin-left: ${(props) => props.space ?? SPACES.xxs};

  background-color: ${COLORS.dark};
`;
