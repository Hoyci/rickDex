import { API } from './API';
import { EpisodeSchema, EpisodesSchema } from './schemas';

class EpisodesService {
  async getByIds(ids: number[]) {
    const { data } = await API.get(`episode/${ids}`);
    if (data instanceof Array) {
      const episodes = EpisodesSchema.parse(data);
      return episodes;
    }
    const episode = EpisodeSchema.parse(data);
    return [episode];
  }
}

export default new EpisodesService();
