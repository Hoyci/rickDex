import { API } from './API';
import { ICharacterResponse } from './models';
import { CharactersSchema, CharacterSchema } from './schemas';

class CharactersService {
  async getAll(
    currentPage: number,
    name?: string,
    characterStatus?: string,
    gender?: string
  ): Promise<ICharacterResponse> {
    const { data } = await API.get(
      `character/?page=${currentPage}&name=${name}&status=${characterStatus}&gender=${gender}`
    );
    const characters = CharactersSchema.parse(data);
    return characters;
  }

  async getById(id: number) {
    const { data } = await API.get(`/character/${id}`);
    const character = CharacterSchema.parse(data);
    return character;
  }
}

export default new CharactersService();
