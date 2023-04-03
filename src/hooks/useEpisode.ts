import { useQuery } from 'react-query';
import EpisodeService from '../services/EpisodesService';

export default function useEpisode(ids: number[]) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['characters', ids],
    queryFn: () => EpisodeService.getByIds(ids),
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: false,
  });

  return {
    data,
    isError,
    isLoading,
  };
}
