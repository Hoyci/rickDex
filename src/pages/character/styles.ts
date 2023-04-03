import styled, { css } from 'styled-components';

interface IEpisode {
  isOpen: boolean;
}

interface ICard {
  isFavorite: boolean;
}

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.4rem;
  padding: 0 2rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContentBox = styled.div``;

export const CardCharacter = styled.div<ICard>`
  display: flex;
  flex-direction: column;
  max-width: 50rem;
  border-radius: 5px;
  padding: 1rem 2rem 1rem 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 2px 5px 0px
    ${({ isFavorite }) =>
      isFavorite ? 'rgba(247, 0, 0, 0.4)' : 'rgba(0, 0, 0, 0.2)'};
`;

export const Content = styled.div`
  display: flex;
  margin-bottom: 1rem;

  @media (max-width: 440px) {
    flex-wrap: wrap;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.blue};
  margin-bottom: 1.4rem;
`;

export const Image = styled.img`
  width: 20rem;
  height: 20rem;
  border-radius: 3px;
  margin-right: 1.4rem;
  margin-bottom: 1.4rem;
`;

export const Value = styled.div`
  display: flex;

  p {
    margin-right: 0.8rem;
  }

  & + & {
    margin-top: 0.5rem;
  }
`;

export const EpisodesContainer = styled.div``;

export const EpisodesHeader = styled.header<IEpisode>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 0.1rem;

  ${({ isOpen }) =>
    isOpen &&
    css`
      margin-bottom: 1rem;
    `}
`;

export const ShowEpisodesButton = styled.button<IEpisode>`
  img {
    width: 1.5rem;
    height: 1.5rem;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
    transition: transform 0.15s ease-in;
  }

  background-color: transparent;
  border: none;
  outline: none;
`;

export const ButtonLike = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  padding: 0.2rem;
  border-radius: 4px;

  margin-top: 2rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    margin-right: 0.4rem;
  }

  span {
    font-size: 1.4rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;
