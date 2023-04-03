import React from 'react';
import usePagination from '../../hooks/usePagination';
import {
  Dots,
  PaginationButton,
  PaginationContainer,
  PaginationItem,
} from './styles';

interface IPagination {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: IPagination) {
  const paginationRange = usePagination(totalPages, currentPage);

  const onNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const onPrevious = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSelectPage = (event: React.MouseEvent<HTMLLIElement>) => {
    const page = event.currentTarget?.dataset?.value || 1;
    setCurrentPage(+page);
  };

  return (
    <PaginationContainer>
      <PaginationButton onClick={onPrevious} disabled={currentPage === 1}>
        &lt;
      </PaginationButton>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === 'x' || pageNumber === 'y') {
          return <Dots key={pageNumber}>&#8230;</Dots>;
        }
        return (
          <PaginationItem
            key={pageNumber}
            onClick={handleSelectPage}
            data-value={pageNumber}
            selected={pageNumber === currentPage}
          >
            {pageNumber}
          </PaginationItem>
        );
      })}
      <PaginationButton onClick={onNext} disabled={currentPage === totalPages}>
        &gt;
      </PaginationButton>
    </PaginationContainer>
  );
}
