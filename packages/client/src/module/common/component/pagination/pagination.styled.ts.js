import styled, { css } from 'styled-components';

import { COLORS, FONTS, SHADOWS, SPACES } from '../../../../theme';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${`${SPACES.m} ${SPACES.xxxxl}`};
  background-color: inherit;
`;

export const PaginateButtonsList = styled.ul`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${SPACES.xxxss};
  }
`;
export const PaginateButtonsListItem = styled.li``;

const buttonsCommonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  font-weight: ${FONTS.WEIGHTS.semi_bold};
  font-size: ${FONTS.SIZES.m};
  box-shadow: ${SHADOWS.xs};
  color: ${COLORS.secondary_Text};
  background-color: ${COLORS.white};
  cursor: pointer;

  border: 1px solid ${COLORS.accent};
`;

export const PaginationButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  ${buttonsCommonStyles}
  border-radius: 50%;

  &.selected {
    color: ${COLORS.white};
    background-color: ${COLORS.accent};
  }
`;

export const PrevPageButton = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  border: 1px solid ${COLORS.accent};

  margin: 0 24px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${COLORS.dark};
`;
