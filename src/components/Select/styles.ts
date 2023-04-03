import styled from 'styled-components';

export const Select = styled.select`
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.white};
  outline: 0;
  padding: 0.2rem;

  &:focus {
    border: 1px solid transparent;
    outline: 1px solid ${({ theme }) => theme.colors.brown};
  }
`;
