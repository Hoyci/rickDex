import styled, { css } from 'styled-components';

interface IPaginationItem {
  selected: boolean;
}

export const PaginationContainer = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin-bottom: 1rem;
`;

export const PaginationButton = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.background};

  &:disabled {
    cursor: default;
    border: 1px solid transparent;
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }

  &:hover:enabled {
    cursor: pointer;
    border: 2px solid ${({ theme }) => theme.colors.blue};
    transition: border 0.2s ease-out;
  }
`;

export const PaginationItem = styled.li<IPaginationItem>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.5rem;
  height: 3.5rem;
  border-radius: 20px;
  margin: 0 0.4rem;

  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.green};
    `}
`;

export const Dots = styled.li`
  color: ${({ theme }) => theme.colors.brown};
  cursor: default;
`;
