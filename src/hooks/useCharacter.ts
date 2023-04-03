import { useQuery } from 'react-query';
import CharactersService from '../services/CharactersService';

export default function useCharacter(id: number) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['characters', id],
    queryFn: () => CharactersService.getById(id),
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
