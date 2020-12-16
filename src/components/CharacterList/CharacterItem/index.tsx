import React from 'react';
import { Link } from 'react-router-dom';

// Assets
import HeartIcon from 'src/images/icons/heart.svg'
import HeartOutlineIcon from 'src/images/icons/heart-outline.svg'

// Types
import { CharacterItemProps, CharacterProps } from '../types';

// Styles
import CharacterItemStyle from './styles';

const CharacterItem: React.FC<CharacterItemProps> = ({ character, favorites, setFavorites }: CharacterItemProps) => {
  const imageVariant = 'standard_fantastic' // 250 x 250

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
        <img src={`${character.thumbnail.path}/${imageVariant}.${character.thumbnail.extension}`} alt={character.name} />
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