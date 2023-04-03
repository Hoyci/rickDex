import styled from 'styled-components';

interface IEpisodeContainer {
  centered: boolean;
}

export const EpisodesContainer = styled.div<IEpisodeContainer>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1rem;
  padding: ${({ centered }) => (centered ? '0.8rem 0' : null)};
`;
