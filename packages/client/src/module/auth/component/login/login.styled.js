import styled, { css } from 'styled-components';
import { COLORS, SPACES } from '../../../../theme';
import * as FONTS from '../../../../theme/fonts.const';
import { Button } from '../../../common/component';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: ${COLORS.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 30%;
  border: 2px solid ${COLORS.gray300};
  border-radius: ${SPACES.l};
  padding: ${SPACES.l} ${SPACES.xxxxl};

  display: flex;
  flex-direction: column;
`;

export const HeaderTitle = styled.h4`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.semi_bold};
  font-size: ${FONTS.SIZES.xxl};
  line-height: ${FONTS.LINE_HEIGHTS.normal200};
  text-align: ${({ align }) => align ?? 'center'};

  color: ${({ color }) => color ?? COLORS.gray900};
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
