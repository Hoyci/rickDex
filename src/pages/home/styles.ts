import styled, { css } from 'styled-components';

interface IContentContainer {
  centered?: boolean;
}

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 8rem;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1.6rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.brown};
  margin-bottom: 1.6rem;
  min-width: 35rem;
  width: 100%;
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 100%;
  max-width: 32rem;
  height: 3rem;
  padding: 0 1.6rem;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  outline: 0;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  margin-bottom: 2rem;

  &:focus {
    border: 1px solid transparent;
    outline: 1px solid ${({ theme }) => theme.colors.brown};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.brown};
  }
`;

export const ContentContainer = styled.div<IContentContainer>`
  display: flex;
  flex-direction: column;

  ${({ centered }) =>
    centered &&
    css`
      position: fixed;
      top: 50%;
      transform: translateY(-50%);
    `}
`;

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 32rem;
  margin-bottom: 1.4rem;
`;

export const CounterTitle = styled.h4`
  margin-bottom: 1.8rem;
`;

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  margin-bottom: 3.2rem;

  @media (min-width: 880px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 2rem;
  }
`;
