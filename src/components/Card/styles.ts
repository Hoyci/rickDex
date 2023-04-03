import styled, { css } from 'styled-components';

interface IBadge {
  variant: 'Alive' | 'Dead' | 'unknown';
}

interface ICard {
  isFavorite: boolean;
}

const bagdesVariants = {
  Alive: css`
    background-color: ${({ theme }) => theme.colors.green};
    color: ${({ theme }) => theme.colors.brown};
  `,
  Dead: css`
    background-color: ${({ theme }) => theme.colors.brown};
    color: ${({ theme }) => theme.colors.white};
  `,
  unknown: css`
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.brown};
  `,
};

export const CardContainer = styled.div<ICard>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 35rem;
  height: 38rem;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 5px 0px
    ${({ isFavorite }) =>
      isFavorite ? 'rgba(247, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.2)'};

  &:hover {
    transform: scale(1.01);
    transition: transform 0.2s;
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  max-width: 30rem;
  max-height: 30rem;
  margin-bottom: 1.4rem;
`;

export const CardTitle = styled.div`
  max-width: 30rem;
  display: flex;
  align-items: center;
`;

export const CardBadge = styled.small<IBadge>`
  font-weight: bold;
  text-transform: uppercase;
  padding: 4px;
  border-radius: 4px;
  margin-left: 8px;

  ${({ variant }) => bagdesVariants[variant]};
`;
