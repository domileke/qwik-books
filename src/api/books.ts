import { randUuid, randMovie, randPastDate } from '@ngneat/falso';
import { AUTHORS } from './authors';
import { GENRES } from './genres';

interface Book {
  id: string;
  name: string;
  authorId: string;
  genreId: string;
  publishedDate: Date;
}

export const BOOKS: Book[] = [];

export function createRandomBook(): Book {
  const author = AUTHORS[Math.floor(Math.random() * AUTHORS.length)];
  const genre = GENRES[Math.floor(Math.random() * GENRES.length)];

  return {
    id: randUuid(),
    name: randMovie(),
    authorId: author.id,
    genreId: genre.id,
    publishedDate: randPastDate({ years: 100 }),
  };
}

Array.from({ length: 10000 }).forEach(() => {
  BOOKS.push(createRandomBook());
});
