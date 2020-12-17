import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import HeartIcon from 'src/images/icons/heart.svg'
import HeartOutlineIcon from 'src/images/icons/heart-outline.svg'

// Types
import { CharacterProps } from 'src/types/Character';

// Styles
import CharacterItemStyle from './styles';

type CharacterItemProps = {
  character: CharacterProps;
  favorites: CharacterProps[];
  setFavorites: (value: CharacterProps[]) => void;
}

const CharacterItem: React.FC<CharacterItemProps> = ({ character, favorites, setFavorites }: CharacterItemProps) => {

  function handleFavorite(character: CharacterProps) {
    if (favorites.includes(character)) {
      const filteredFavorites = favorites.filter((favorite: CharacterProps) => favorite.id !== character.id)
      setFavorites(filteredFavorites)
    } else {
      if (favorites.length < 5) {
        setFavorites([
          ...favorites,
          character
        ])
      }
    }
  }

  return (
    <CharacterItemStyle>
      <Link to={`/${character.id}`}>
        <figure>
          <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} alt={character.name} />
        </figure>
      </Link>
      <div>
        <h3>{character.name}</h3>
        <button onClick={() => handleFavorite(character)}>
          {
            favorites.find((favoriteItem: CharacterProps) => favoriteItem.id === character.id)
              ? <img src={HeartIcon} alt='Desfavoritar' title='Desfavoritar' />
              : <img src={HeartOutlineIcon} alt='Favoritar' title='Favoritar' />
          }
        </button>
      </div>
    </CharacterItemStyle>
  )
}

export default CharacterItem;