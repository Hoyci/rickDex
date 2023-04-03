import { ICharacter } from '../../services/models';
import { CardBadge, CardContainer, CardImage, CardTitle } from './styles';

interface ICard {
  character: ICharacter;
  onClick: (characterId: number) => void;
  isFavorite: boolean;
}

export default function Card({ character, onClick, isFavorite }: ICard) {
  return (
    <CardContainer
      onClick={() => onClick(character.id)}
      isFavorite={isFavorite}
    >
      <CardImage
        src={character.image}
        alt={`${character.name} image`}
        loading="lazy"
      />
      <CardTitle>
        <strong>{character.name}</strong>
        <CardBadge variant={character.status}>{character.status}</CardBadge>
      </CardTitle>
    </CardContainer>
  );
}
