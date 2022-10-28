import { randUuid, randFullName } from '@ngneat/falso';

type SexType = 'male' | 'female' | undefined;

interface Author {
  id: string;
  name: string;
  gender: SexType;
}

export const AUTHORS: Author[] = [];

export function createRandomAuthor(): Author {
  // randomly return 0, 1, or 2
  const index = Math.round(Math.random() * 2);

  // return 'male', 'female' or undefined
  const sexType = ['male', 'female'][index] as SexType;

  return {
    id: randUuid(),
    name: randFullName({ gender: sexType }),
    gender: sexType,
  };
}

Array.from({ length: 100 }).forEach(() => {
  AUTHORS.push(createRandomAuthor());
});
