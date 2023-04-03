export interface ICharacterResponse {
  info: IInfo;
  results: ICharacter[];
}

export interface IResponseError {
  error: string;
}

interface IInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharacter {
  id: number;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface IOrigin {
  name: string;
  url: string;
}

interface ILocation {
  name: string;
  url: string;
}

export interface IEpisode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}
