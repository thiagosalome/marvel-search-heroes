export type CharacterProps = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export type CharacterItemProps = {
  character: CharacterProps;
  favorites: CharacterProps[];
  setFavorites: (value: CharacterProps[]) => void;
}
