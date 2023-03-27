import styled, { css } from 'styled-components';

import { ReactComponent as PlaceholderSvgIcon } from '../../../../assets/icon/no-image.svg';
import { ReactComponent as EditSvgIcon } from '../../../../assets/icon/edit-01.svg';
import { COLORS, SPACES, FONTS, TRANSITIONS, SHADOWS } from '../../../../theme';

export const layoutCss = css`
  display: table;
  width: 100%;
  table-layout: fixed;
`;

export const tHeadRowAndTDataCommonStyle = css`
  padding: ${`${SPACES.l} ${SPACES.xxxxl}`};
`;

export const cellControlledSizes = css`
  &.cell {
    width: 12.5rem;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Head = styled.thead`
  ${layoutCss}
  border-bottom: 1px solid ${COLORS.gray300};
`;

export const Body = styled.tbody`
  ${layoutCss}
`;

export const HeadRow = styled.th`
  ${tHeadRowAndTDataCommonStyle}

  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.s};
  text-align: left;
  color: ${COLORS.semiTransparentWhite};

  &.link {
    width: 4.375rem;
  }

  &.edit {
    width: 1.875rem;
    padding: 0;
  }

  ${cellControlledSizes}
`;

export const Row = styled.tr`
  ${layoutCss}

  &:not(:last-child) {
    border-bottom: 1px solid ${COLORS.gray300};
  }

  &:nth-child(even) {
    background-color: ${COLORS.gray50};
  }
`;

export const Data = styled.td`
  ${tHeadRowAndTDataCommonStyle}

  font-weight: ${FONTS.WEIGHTS.normal};
  font-size: ${FONTS.SIZES.m};
  vertical-align: middle;
  color: ${COLORS.semiTransparentWhite};

  &.link {
    width: 4.375rem;
  }

  &.edit {
    width: 1.875rem;
    padding: 0 20px;
  }

  &.title {
    position: relative;
    padding: ${`${SPACES.l} 0 ${SPACES.l} ${SPACES.xxxxl}`};

    &:hover {
      cursor: pointer;
    }
  }

  ${cellControlledSizes}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.span`
  display: block;
  margin-left: ${SPACES.s};

  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.s};
  color: ${COLORS.semiTransparentWhite};

  &.no-margin {
    margin-left: 0;
  }
`;

export const EditIcon = styled(EditSvgIcon)`
  width: 100%;
  height: 100%;

  color: ${COLORS.semiTransparentWhite};
  transition: color ${TRANSITIONS.duration.fast}};
`;

export const ItemImage = styled.img`
  width: 2.5rem;
  aspect-ratio: 1 / 1;
  margin-left: ${SPACES.s};

  object-position: center;
  object-fit: cover;
  overflow: hidden;

  border-radius: 50%;
  cursor: pointer;
`;

export const ImagePlaceholderThumb = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.5rem;
  height: 2.5rem;
  margin-left: ${SPACES.s};

  border-radius: 50%;
  overflow: hidden;
  background-color: ${COLORS.gray300};
  cursor: pointer;
`;

export const ImagePlaceholder = styled(PlaceholderSvgIcon)`
  width: 50%;
  height: 50%;

  object-fit: cover;
`;

export const GenderAgeWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${SPACES.xxxss};
`;

export const EditButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.25rem;
  height: 1.25rem;
  margin: 0;
  padding: 0;
  border: 0;
  background-color: transparent;

  cursor: pointer;

  &:hover > svg {
    color: ${COLORS.primary300};
  }
`;

const truncateStringStyles = css`
  display: -webkit-box;
  -webkit-line-clamp: ${({ linesToTruncate }) => linesToTruncate ?? 1};
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const labelPriceCommonStyles = css`
  font-weight: ${FONTS.WEIGHTS.medium};
  font-size: ${FONTS.SIZES.m};
  line-height: ${FONTS.LINE_HEIGHTS.normal300};
  color: ${COLORS.gray900};
`;

export const ItemLabel = styled.strong`
  display: block;
  ${truncateStringStyles}
  ${labelPriceCommonStyles}
  cursor: pointer;

  &.tooltip::after {
    position: absolute;
    bottom: 70%;
    left: 40%;
    width: max-content;
    max-width: 12rem;
    content: ${({ tooltipText }) => `'${tooltipText}'`};
    padding: ${`${SPACES.xxs} ${SPACES.xs}`};
    font-weight: ${FONTS.WEIGHTS.normal};
    font-size: ${FONTS.SIZES.s};
    border: 1px solid ${COLORS.gray300};
    border-radius: ${SPACES.m};

    background-color: ${COLORS.white};
    box-shadow: ${SHADOWS.xs};

    visibility: hidden;
    z-index: 3;

    transition: visibility ${TRANSITIONS.duration.fast} ${TRANSITIONS.function.linear};
  }

  ${({ tooltipText }) =>
    tooltipText.length >= 17 &&
    css`
      &.tooltip:hover::after {
        visibility: visible;
      }
    `}
`;

export const ageBadgePallete = {
  borderColor: COLORS.semiTransparentWhite,
  textColor: COLORS.bodyText
};
