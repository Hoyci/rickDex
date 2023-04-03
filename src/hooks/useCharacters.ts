import { useQuery } from 'react-query';
import CharactersService from '../services/CharactersService';

// How i get only 20 characters per page, the best approach is call the API everytime the filter changes
// If i get all the characters in one request, the best approach would be filter using typescript to don't call the api again
export default function useCharacters(
  currentPage: number,
  searchTerm: string,
  status: string,
  gender: string
) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ['characters', currentPage, searchTerm, status, gender],
    queryFn: () =>
      CharactersService.getAll(currentPage, searchTerm, status, gender),
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
