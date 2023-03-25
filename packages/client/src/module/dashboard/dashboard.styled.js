import styled, { css } from 'styled-components';
import { COLORS, SPACES } from '../../theme';
import { Button } from '../common/component';

export const Container = styled.div`
  width: 100%;
  background: ${COLORS.white};
  margin-top: 1px;
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
