// import { CardBadge } from '../Card/styles';

import useEpisode from '../../hooks/useEpisode';
import { CardBadge } from '../Card/styles';
import Spinner from '../Spinner';
import { EpisodesContainer } from './styles';

interface IEpisodeBadge {
  ids: number[];
}

export default function EpisodesBadges({ ids }: IEpisodeBadge) {
  const { data, isError, isLoading } = useEpisode(ids);

  return (
    <EpisodesContainer centered={isLoading || isError}>
      {isLoading && <Spinner size={32} />}
      {isError && <p>Error trying to get episodes</p>}
      {!isLoading &&
        !isError &&
        data?.map((episode) => (
          <CardBadge key={episode.name} variant="unknown">
            {episode.episode}
          </CardBadge>
        ))}
    </EpisodesContainer>
  );
}
