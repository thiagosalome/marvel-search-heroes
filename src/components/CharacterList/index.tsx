import React, { useEffect, useState } from 'react';

// Assets
import HeroIcon from 'src/images/icons/hero.svg'
import HeartIcon from 'src/images/icons/heart.svg'
import HeartOutlineIcon from 'src/images/icons/heart-outline.svg'
import ToggleButton from '../ToggleButton';

// Config
import api from 'src/config/api';

// Styles
import { TopBar, List, Character } from './styles';

interface CharacterProps {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

const CharacterList: React.FC = () => {
  const imageVariant = 'standard_fantastic' // 250 x 250
  const [ limit, setLimit ] = useState(20)
  const [ total, setTotal ] = useState(0)
  const [ orderBy, setOrderBy ] = useState('-modified')
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get('/characters', {
        params: {
          limit,
          orderBy
        }
      })
      setTotal(data.data.total)
      setCharacters(data.data.results)
    }

    getCharacters()
  }, [ limit, orderBy ])

  if (!characters) {
    return <p>Carregando...</p>
  }

  function handleOrderBy() {
    setOrderBy(orderBy === '-modified' ? 'name' : '-modified')
  }

  return (
    <>
      <TopBar>
        <p>Encontrados {total} heróis</p>
        <div>
          <button onClick={handleOrderBy}>
            <img src={HeroIcon} alt='Ordenar por nome - A/Z' title='Ordenar por nome - A/Z' />
            <span>Ordenar por nome - A/Z</span>
          </button>
          <div>
            <ToggleButton active={orderBy === 'name'} onClick={handleOrderBy} />
          </div>
          <button>
            <img src={HeartIcon} alt='Somente favoritos' title='Somente favoritos' />
            <span>Somente favoritos</span>
          </button>
        </div>
      </TopBar>
      <List>
        {
          characters.map((character: CharacterProps) => (
            <Character key={character.id} to='/character'>
              <figure>
                <img src={`${character.thumbnail.path}/${imageVariant}.${character.thumbnail.extension}`} alt={character.name} />
              </figure>
              <div>
                <h3>{character.name}</h3>
                <button><img src={HeartOutlineIcon} alt='Favoritar' title='Favoritar' /></button>
              </div>
            </Character>
          ))
        }
      </List>
    </>
  )
}

export default CharacterList;