import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled, { css } from 'styled-components';

import { COLORS, FONTS, SHADOWS, SPACES } from '../../../../theme';

const commonStyles = css`
  margin: 0;
  padding: ${({ innerPads }) => innerPads ?? `${SPACES.xs} ${SPACES.m}`};

  border: 1px solid ${COLORS.semiWhite};
  border-radius: ${SPACES.xxs};
  box-shadow: ${SHADOWS.xxs};
  background-color: ${COLORS.white};

  &:not(:focus-within) {
    cursor: pointer;
  }

  &::placeholder {
    color: ${({ placeholderColor, theme }) => placeholderColor ?? COLORS.semiTransparentGrey};
  }

  &:focus-within {
    outline: 1px solid ${COLORS.semiWhite};
  }
`;

export const Input = styled.input.attrs(({ gapFromLabel, height, readOnly }) => ({
  gapFromLabel,
  height,
  readOnly
}))`
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};

  ${commonStyles}

  &:focus-within {
    outline: ${({ readOnly }) => readOnly && 'none'};
  }

  color: ${({ readOnly }) => readOnly && COLORS.blueGrey};
  margin-top: ${({ gapFromLabel }) => gapFromLabel ?? SPACES.xxxs};
  position: relative;

  cursor: ${({ readOnly }) => (readOnly ? 'initial' : 'pointer')};
  pointer-events: ${({ readOnly }) => (readOnly ? 'none' : 'initial')};
`;

export const Input2 = styled.input`
  position: relative;
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? '100%'};

  ${commonStyles}

  outline: none;
  transition: 0.5s;
  
  
  
  ${({ readOnly }) =>
  readOnly &&
  css`
      &:focus-within {
        outline: ${({ readOnly }) => readOnly && 'none'};
      }
  
      color: ${({ readOnly }) => readOnly && COLORS.blueGrey};
      cursor: ${({ readOnly }) => (readOnly ? 'initial' : 'pointer')};
      pointer-events: ${({ readOnly }) => (readOnly ? 'none' : 'initial')};
      
       && > label {
          color: ${COLORS.dark};
          transform: translateX(10px) translateY(-7px);
          font-size: ${SPACES.xs};
          padding: 0 ${SPACES.xs};
          background: ${COLORS.white};
          border-left: 1px solid ${COLORS.semiWhite};
          border-right: 1px solid ${COLORS.semiWhite};
          letter-spacing: 0.2em;
       }
   `}

  &&:valid ~ label,
  &&:focus ~ label {
    color: ${COLORS.dark};
    transform: translateX(10px) translateY(-7px);
    font-size: ${SPACES.xs};
    padding: 0 ${SPACES.xs};
    background: ${COLORS.white};
    border-left: 1px solid ${COLORS.semiWhite};
    border-right: 1px solid ${COLORS.semiWhite};
    letter-spacing: 0.2em;
  }
`;

export const Label2 = styled.label`
  position: absolute;
  left: 0;
  padding-left: ${({ pl }) => pl ?? SPACES.xs};
  padding-right: ${({ pr }) => pr ?? SPACES.xs};
  padding-bottom: ${({ pb }) => pb ?? SPACES.xs};
  padding-top: ${({ pt }) => pt ?? SPACES.xs};
  pointer-events: none;
  color: rgba(22, 22, 22, 0.25);
  transition: 0.5s;
  
    ${({ readOnly }) =>
  readOnly &&
  css`
      
          color: ${COLORS.dark};
          transform: translateX(10px) translateY(-7px);
          font-size: ${SPACES.xs};
          padding: 0 ${SPACES.xs};
          background: ${COLORS.white};
          border-left: 1px solid ${COLORS.semiWhite};
          border-right: 1px solid ${COLORS.semiWhite};
          letter-spacing: 0.2em;
       }
   `}
`;


export const Label = styled.label`
  position: relative;
  display: block;

  font-weight: ${FONTS.WEIGHTS.semi_bold};
  font-size: ${FONTS.SIZES.m};
  text-transform: capitalize;

  color: ${COLORS.semiTransparentWhite};

  ${({ required }) =>
  required &&
  css`
      &::after {
        content: '*';
        right: 0;
        top: 0;
      }
    `}
`;

export const Error = styled.div`
  position: absolute;
  left: ${SPACES.xxxss};
  bottom: -${SPACES.xl};
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.primaryRed};
`;

export const Wrapper = styled.div`
  position: relative;

  margin-left: ${({ ml }) => ml ?? '0'};
  margin-right: ${({ mr }) => mr ?? '0'};
  margin-bottom: ${({ mb }) => mb ?? '0'};
  margin-top: ${({ mt }) => mt ?? '0'};

  & .inputIcon {
    position: absolute;
    top: 50%;
    left: ${SPACES.l};
    transform: translateY(25%);
  }
`;

export const defaultSvgStyles = {
  color: COLORS.semiWhite,
  height: '1.25rem',
  width: '1.25rem',
  className: 'inputIcon'
};

const visibilityIcon = css`
  color: ${COLORS.dark};
  cursor: pointer;
  position: absolute;
  top: 50%;
  top: ${({ top }) => (top === '1' ? '70%' : '50%;')};
  right: ${SPACES.xs};
  transform: translateY(-50%);
`;

export const Visibility = styled(VisibilityIcon)`
  ${visibilityIcon}
`;

export const VisibilityOff = styled(VisibilityOffIcon)`
  ${visibilityIcon}
`;
