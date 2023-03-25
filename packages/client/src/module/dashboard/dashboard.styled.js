import styled, { css } from 'styled-components';
import { COLORS, SPACES } from '../../theme';
import { Button } from '../common/component';
import * as FONTS from '../../theme/fonts.const';

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.white};
  margin-top: 1px;
`;

export const Content = styled.div`
  width: 80%;
  border: 2px solid ${COLORS.gray300};
  border-radius: ${SPACES.l};
  margin: 0 auto;
  padding: ${SPACES.l} 0;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${SPACES.l};
`;

export const HeaderTitle = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  // font-weight: ${FONTS.WEIGHTS.medium};
  // font-size: ${FONTS.SIZES.s};
  // line-height: ${FONTS.LINE_HEIGHTS.normal200};
  text-align: ${({ align }) => align ?? 'center'};
/
  color: ${({ color }) => color ?? COLORS.gray900};
`;

export const ItemQuantatyBadge = styled.span`
  padding: 0.125rem ${SPACES.xs};
  margin-left: ${SPACES.xxs};

  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.m};
  border-radius: ${SPACES.l};

  background-color: ${COLORS.accent};
  color: ${COLORS.white};
`;

const buttonsSharedStyels = css`
  padding-top: ${SPACES.xxs};
  padding-bottom: ${SPACES.xxs};
`;

export const SaveButton = styled(Button)`
  margin-top: 20px;
  margin-bottom: 10px;
  ${buttonsSharedStyels}

  ${({ hasErrors }) =>
    hasErrors &&
    css`
      margin-bottom: 0 !important;
    `}
`;
