import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card';
import Pagination from '../../components/Pagination';
import Select from '../../components/Select';
import Spinner from '../../components/Spinner';
import useCharacters from '../../hooks/useCharacters';
import useDebounce from '../../hooks/useDebounce';
import useLocalStorage from '../../hooks/useLocalStorage';

import {
  CardContainer,
  Container,
  ContentContainer,
  CounterTitle,
  FiltersContainer,
  Header,
  SearchInput,
} from './styles';

const GENDERS = ['Male', 'Female', 'Genderless', 'unknown'];
const STATUS = ['Alive', 'Dead', 'unknown'];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gender, setGender] = useState('');
  const [status, setStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const debouncedValue = useDebounce(searchTerm, 200);
  const [favorites] = useLocalStorage('favorites', []);

  const navigate = useNavigate();

  const { data, isError, isLoading } = useCharacters(
    currentPage,
    debouncedValue,
    status,
    gender
  );

  const handleChangeSearchTerm = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCurrentPage(1);
    setSearchTerm(event.target.value);
  };

  const handleChangeGender = (genderValue: string) => {
    setCurrentPage(1);
    setGender(genderValue);
  };

  const handleChangeStatus = (statusValue: string) => {
    setCurrentPage(1);
    setStatus(statusValue);
  };

  const handleNavigate = (characterId: number) => {
    navigate(`/characters/${characterId}`);
  };

  return (
    <>
      {isLoading && (
        <Container>
          <ContentContainer centered>
            <Spinner size={32} />
          </ContentContainer>
        </Container>
      )}

      <Container>
        <Header>
          <SearchInput
            placeholder="Search character"
            onChange={handleChangeSearchTerm}
          />
          <FiltersContainer>
            <Select
              defaultOption="Select a gender"
              options={GENDERS}
              value={gender}
              dispatcher={handleChangeGender}
            />
            <Select
              defaultOption="Select a status"
              options={STATUS}
              value={status}
              dispatcher={handleChangeStatus}
            />
          </FiltersContainer>
        </Header>
        <ContentContainer>
          {!isLoading && !isError && (
            <CounterTitle>{data?.info.count || 0} characters</CounterTitle>
          )}
          {isError && <h1>No characters found</h1>}
          {!isError && data?.results && (
            <CardContainer>
              {data?.results.map((character) => (
                <Card
                  key={character.id}
                  character={character}
                  onClick={handleNavigate}
                  isFavorite={favorites.includes(character.id)}
                />
              ))}
            </CardContainer>
          )}
        </ContentContainer>
        {!isLoading && !isError && (
          <Pagination
            currentPage={currentPage}
            totalPages={data?.info.pages || 0}
            setCurrentPage={setCurrentPage}
          />
        )}
      </Container>
    </>
  );
}
