import { z } from 'zod';

export const CharacterSchema = z.object({
  id: z.number(),
  name: z.string(),
  status: z.enum(['Alive', 'Dead', 'unknown']),
  species: z.string(),
  type: z.string(),
  gender: z.enum(['Female', 'Male', 'Genderless', 'unknown']),
  origin: z.object({
    name: z.string(),
    url: z.string(),
  }),
  location: z.object({
    name: z.string(),
    url: z.string(),
  }),
  image: z.string(),
  episode: z.array(z.string()),
  url: z.string().url(),
  created: z.string().datetime(),
});

export const CharactersSchema = z.object({
  info: z.object({
    count: z.number(),
    pages: z.number(),
    next: z.string().nullable(),
    prev: z.string().nullable(),
  }),
  results: z.array(CharacterSchema),
});

export const EpisodeSchema = z.object({
  id: z.number(),
  name: z.string(),
  air_date: z.string(),
  episode: z.string(),
  characters: z.array(z.string()),
  url: z.string(),
  created: z.string(),
});

export const EpisodesSchema = z.array(EpisodeSchema);
