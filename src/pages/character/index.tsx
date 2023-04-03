import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardBadge } from '../../components/Card/styles';
import Spinner from '../../components/Spinner';
import useCharacter from '../../hooks/useCharacter';
import arrow from '../../assets/images/icons/arrow.svg';
import favorite from '../../assets/images/icons/favorite.svg';
import noFavorite from '../../assets/images/icons/noFavorite.svg';

import {
  ButtonLike,
  CardCharacter,
  Container,
  Content,
  ContentBox,
  ContentContainer,
  EpisodesContainer,
  EpisodesHeader,
  Image,
  ShowEpisodesButton,
  TitleContainer,
  Value,
} from './styles';
import EpisodesBadges from '../../components/EpisodesBadges';
import useLocalStorage from '../../hooks/useLocalStorage';

export default function Character() {
  const [showEpisodes, setShowEpisodes] = useState(false);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);
  const { id } = useParams();

  const { data, isError, isLoading } = useCharacter(Number(id));
  const listOfEpisodes =
    data?.episode.map((ep) => Number(ep.split('/').at(-1))) || [];

  const handleToggleShowEpisodes = () => {
    setShowEpisodes((prevState) => !prevState);
  };

  const handleAddFavoriteCharacter = () => {
    setFavorites((prevState: number[]) =>
      prevState.includes(Number(id))
        ? [...prevState]
        : [...prevState, Number(id)]
    );
  };

  const handleRemoveFavoriteCharacter = () => {
    setFavorites((prevState: number[]) =>
      prevState.filter((characterId: number) => characterId !== Number(id))
    );
  };

  return (
    <Container>
      <ContentContainer>
        {isLoading && <Spinner size={32} />}
        {isError && <h1>There was an error trying to find your character</h1>}
        {!isError && !isLoading && (
          <CardCharacter isFavorite={favorites.includes(Number(id))}>
            <TitleContainer>
              <h2>License</h2>
            </TitleContainer>
            <Content>
              <Image src={data?.image} alt={data?.name} />
              <ContentBox>
                <Value>
                  <p>Number:</p>
                  <h4>{id}</h4>
                </Value>
                <Value>
                  <p>Name:</p>
                  <h4>{data?.name}</h4>
                </Value>
                <Value>
                  <p>Gender:</p>
                  <h4>{data?.gender}</h4>
                </Value>
                <Value>
                  <p>Specie:</p>
                  <h4>{data?.species}</h4>
                </Value>
                <Value>
                  <p>Status:</p>
                  <CardBadge variant={data?.status || 'unknown'}>
                    {data?.status}
                  </CardBadge>
                </Value>
                <Value>
                  <p>Location:</p>
                  <h4>{data?.location.name}</h4>
                </Value>
                <ButtonLike
                  type="button"
                  onClick={
                    favorites.includes(Number(id))
                      ? handleRemoveFavoriteCharacter
                      : handleAddFavoriteCharacter
                  }
                >
                  {favorites.includes(Number(id)) ? (
                    <>
                      <img src={noFavorite} alt="Broken heart" />{' '}
                      <span>Dislike</span>
                    </>
                  ) : (
                    <>
                      <img src={favorite} alt="heart" />
                      <span>Like</span>
                    </>
                  )}
                </ButtonLike>
              </ContentBox>
            </Content>

            <EpisodesContainer>
              <EpisodesHeader isOpen={showEpisodes}>
                <p>Show episodes</p>
                <ShowEpisodesButton
                  isOpen={showEpisodes}
                  type="button"
                  onClick={handleToggleShowEpisodes}
                >
                  <img src={arrow} alt="Open episodes" />
                </ShowEpisodesButton>
              </EpisodesHeader>
              {showEpisodes && <EpisodesBadges ids={listOfEpisodes} />}
            </EpisodesContainer>
          </CardCharacter>
        )}
      </ContentContainer>
    </Container>
  );
}
