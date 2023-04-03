import { useMemo } from 'react';

const range = (start: number, end: number) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

export default function usePagination(
  totalPages: number,
  currentPage: number,
  sibilingCount = 1
) {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = sibilingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return range(1, totalPages);
    }

    const leftSibilingIndex = Math.max(currentPage - sibilingCount, 1);
    const rightSibilingIndex = Math.min(
      currentPage + sibilingCount,
      totalPages
    );

    const shouldShowLeftDots = leftSibilingIndex > 2;
    const shouldShowRightDots = rightSibilingIndex < totalPages - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * sibilingCount;
      const leftRange = range(1, leftItemCount);

      return [...leftRange, 'x', totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * sibilingCount;
      const rightRange = range(totalPages - rightItemCount + 1, totalPages);

      return [firstPageIndex, 'x', ...rightRange];
    }

    const middlerange = range(leftSibilingIndex, rightSibilingIndex);
    return [firstPageIndex, 'x', ...middlerange, 'y', lastPageIndex];
  }, [totalPages, sibilingCount, currentPage]);

  return paginationRange;
}
