import styled from 'styled-components';

import { COLORS, FONTS, SPACES } from '../../../../theme';

export const OptionBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  margin: ${SPACES.xxs} 3% ${SPACES.lxxs} 3%;
  gap: ${SPACES.xxs};
  width: 94%;
  height: 300px;
`;

export const FieldLabel = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.m};
  color: ${COLORS.semiTransparentGrey};
`;

export const Text = styled.span`
  font-family: ${FONTS.FAMILIES.poppins};
  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.s};
  color: ${COLORS.dark};
`;

export const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 12px;

  object-fit: cover;
  object-fit: fill;
`;

export const AvatarContainer = styled.div`
  position: relative;
  margin-bottom: ${SPACES.xxs};
  width: 100%;
  height: 100%;
  background: ${COLORS.ligthGreyBlue};
  border: 1px dashed ${COLORS.blueGrey};
  border-radius: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  input {
    position: absolute;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;

    z-index: -1;
  }
`;

export const AddAvatar = styled.img`
  &:hover {
    cursor: pointer;

    rect {
      fill: black;
    }
  }
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${COLORS.gray50};
  padding: 0;
  margin: 0;
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 80%;
  border-radius: 5px;
  cursor: pointer;
`;
