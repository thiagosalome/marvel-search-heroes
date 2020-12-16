import React, { ChangeEvent, useEffect, useState } from 'react';

// Components
import MainSearch from 'src/components/MainSearch';
import CharacterItem from './CharacterItem';

// Assets
import HeroIcon from 'src/images/icons/hero.svg'
import HeartIcon from 'src/images/icons/heart.svg'

// Config
import api from 'src/config/api';

// Types
import { CharacterProps } from './types'

// Styles
import { TopBar, List, OrderBySelect, FavoritesButton, Toggle } from './styles';


const CharacterList: React.FC = () => {
  let content
  const [ nameStartsWith, setNameStartsWith ] = useState('')
  const [ limit, setLimit ] = useState(20)
  const [ total, setTotal ] = useState(0)
  const [ orderBy, setOrderBy ] = useState('-modified')
  const [ characters, setCharacters ] = useState<CharacterProps[]>([])
  const [ favorites, setFavorites ] = useState<CharacterProps[]>([])
  const [ showFavorites, setShowFavorites ] = useState(false)

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get('/characters', {
        params: {
          limit,
          orderBy,
          nameStartsWith: nameStartsWith ? nameStartsWith : null
        }
      })
      setTotal(data.data.total)
      setCharacters(data.data.results)
    }

    getCharacters()
  }, [ limit, orderBy, nameStartsWith ])

  function handleOrderBy(evt: ChangeEvent<HTMLSelectElement>) {
    setOrderBy(evt.target.value)
  }

  function toggleFavorites() {
    setShowFavorites(!showFavorites)
  }

  function handleSearch(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target
    if (value.length >= 3) {
      setNameStartsWith(value)
    } else {
      setNameStartsWith('')
    }
  }

  if (showFavorites) {
    if (favorites.length > 0) {
      content = (
        favorites.map((character: CharacterProps) => (
          <CharacterItem key={character.id} character={character} favorites={favorites} setFavorites={setFavorites} />
        ))
      )
    } else {
      content = <p>Você ainda não possui favoritos</p>
    }
  } else {
    content = (
      characters.map((character: CharacterProps) => (
        <CharacterItem key={character.id} character={character} favorites={favorites} setFavorites={setFavorites} />
      ))
    )
  }

  if (!characters) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <MainSearch onChange={handleSearch} />
      <TopBar>
        <p>Encontrados {total} heróis</p>
        <div>
          <OrderBySelect>
            <img src={HeroIcon} alt='Ordenar por nome - A/Z' title='Ordenar por nome - A/Z' />
            <select onChange={handleOrderBy} name='order-by'>
              <option value='-modified'>Ordenar por modificação (Dec.)</option>
              <option value='modified'>Ordenar por modificação (Cres.)</option>
              <option value='-name'>Ordenar por nome (Dec.)</option>
              <option value='name'>Ordenar por nome (Cres.)</option>
            </select>
          </OrderBySelect>
          <FavoritesButton onClick={toggleFavorites}>
            <Toggle active={showFavorites} />
            <img src={HeartIcon} alt='Somente favoritos' title='Somente favoritos' />
            <span>Somente favoritos</span>
          </FavoritesButton>
        </div>
      </TopBar>
      <List>
        {content}
      </List>
    </>
  )
}

export default CharacterList;