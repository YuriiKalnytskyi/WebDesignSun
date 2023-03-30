import React from 'react';

import * as Styled from './pagination.styled.ts';
import { usePagination } from '../../hooks';

import arrowLeft from '../../../../assets/icon/arrow-left.svg';
import arrowRight from '../../../../assets/icon/arrow-right.svg';

export const Pagination = ({ currentPage, onPageChange, pageSize, totalCount, siblingCount }) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });
  const lastPage = paginationRange[paginationRange.length - 1];
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === lastPage;

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    if (isFirstPage) return;

    onPageChange(currentPage - 1);
  };

  const onCertainPage = (pageNumber) => {
    if (!currentPage) return;

    onPageChange(pageNumber);
  };

  return (
    <Styled.Container>
      {/*{!isFirstPage && (*/}
      <Styled.PrevPageButton disabled={isFirstPage} onClick={onPrevious}>
        <Styled.Icon
          style={{
            WebkitMaskImage: `url(${arrowLeft})`,
            WebkitMaskSize: '100% 100%',
            maskImage: `url(${arrowLeft})`
          }}
        />
      </Styled.PrevPageButton>
      {/*)}*/}

      <Styled.PaginateButtonsList>
        {paginationRange?.map((pageNumber, index) => {
          if (typeof pageNumber === 'string') {
            return (
              <Styled.PaginateButtonsListItem key={index}>&#8230;</Styled.PaginateButtonsListItem>
            );
          }

          return (
            <Styled.PaginateButtonsListItem key={index}>
              <Styled.PaginationButton
                className={pageNumber === currentPage ? 'selected' : ''}
                onClick={onCertainPage.bind(this, pageNumber)}
              >
                {pageNumber}
              </Styled.PaginationButton>
            </Styled.PaginateButtonsListItem>
          );
        })}
      </Styled.PaginateButtonsList>
      {/*{!isLastPage && (*/}
      <Styled.PrevPageButton onClick={onNext} disabled={isLastPage}>
        <Styled.Icon
          style={{
            WebkitMaskImage: `url(${arrowRight})`,
            WebkitMaskSize: '100% 100%',
            maskImage: `url(${arrowRight})`
          }}
        />
      </Styled.PrevPageButton>
      {/*)}*/}
    </Styled.Container>
  );
};
