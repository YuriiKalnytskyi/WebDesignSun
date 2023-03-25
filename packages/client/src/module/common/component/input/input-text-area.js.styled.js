import styled, { css } from 'styled-components';

import emailIcon from '../../../../assets/icon/grayEmailIcon.svg';
import { COLORS, SPACES, FONTS } from '../../../../theme';

export const Input = styled.textarea`
  width: 100%;
  margin: ${SPACES.xxxxs} 0 0 0;
  background: ${({ isEmail }) => (isEmail ? `url(${emailIcon}) 0.625rem no-repeat` : COLORS.white)};
  border: 1px solid ${COLORS.semiWhite};
  border-radius: 0.5rem;
  padding: ${SPACES.xs};
  padding-left: ${({ isEmail }) => (isEmail ? '7.5rem' : SPACES.m)};
  outline: none;
  resize: none;

  &:focus-within {
    outline: ${`1px solid ${COLORS.ligthGreyBlue}`};
  }

  &:disabled {
    background-color: ${COLORS.white};
    color: ${COLORS.blueGrey};
  }
`;

export const ErrorInfoContainer = styled.div`
  display: flex;
  align-items: center;

  ${({ mb }) =>
    mb &&
    css`
      margin-bottom: ${mb};
    `}
`;

export const ErrorInfoText = styled.div`
  box-sizing: border-box;
  font-family: ${FONTS.FAMILIES.poppins};
  font-style: normal;
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  line-height: ${FONTS.SIZES.xxl};
  color: ${COLORS.primaryRed};
`;

export const InputContainer = styled.div`
  margin: ${({ margin }) => margin};
  width: 100%;
  display: flex;
  flex-direction: column;
`;
