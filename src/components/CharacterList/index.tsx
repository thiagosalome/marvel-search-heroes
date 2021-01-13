import React, { ChangeEvent, useContext, useEffect, useState } from 'react';

// Components
import MainSearch from 'src/components/MainSearch';
import CharacterItem from './CharacterItem';
import Loading from 'src/components/Loading';
import Pagination from 'src/components/Pagination';

// Assets
import HeroIcon from 'src/images/icons/hero.svg'
import HeartIcon from 'src/images/icons/heart.svg'

// Contexts
import FavoritesContext from 'src/contexts/FavoritesContext';

// Config
import api from 'src/services/api';

// Types
import { CharacterProps } from 'src/types/Character'

// Styles
import { TopBar, List, OrderBySelect, FavoritesButton, Toggle } from './styles';


const CharacterList: React.FC = () => {
  let content
  const limit = 20
  const [ nameStartsWith, setNameStartsWith ] = useState('')
  const [ total, setTotal ] = useState(0)
  const [ offset, setOffset ] = useState(0)
  const [ orderBy, setOrderBy ] = useState('-modified')
  const [ characters, setCharacters ] = useState<CharacterProps[]>([])
  const [ showFavorites, setShowFavorites ] = useState(false)
  const { favorites, setFavorites } = useContext(FavoritesContext)
  useEffect(() => {
    async function getCharacters() {
      try {        
        const { data } = await api.get('/characters', {
          params: {
            offset,
            limit,
            orderBy,
            nameStartsWith: nameStartsWith ? nameStartsWith : null
          }
        })
        setTotal(data.data.total)
        setCharacters(data.data.results)
      } catch (error) {
        console.log(error.response);
      }
    }

    getCharacters()
  }, [ offset, limit, orderBy, nameStartsWith ])

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
          <CharacterItem key={character.id} character={character} favorites={favorites} setFavorites={setFavorites as (value: CharacterProps[]) => void} />
        ))
      )
    } else {
      content = <p>Você ainda não possui favoritos</p>
    }
  } else {
    content = (
      characters.map((character: CharacterProps) => (
        <CharacterItem key={character.id} character={character} favorites={favorites} setFavorites={setFavorites as (value: CharacterProps[]) => void} />
      ))
    )
  }

  if (!characters.length) {
    return <Loading message='Buscando heróis... Aguarde um momento' />
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
      { !showFavorites && <Pagination numberPages={Math.ceil(total / limit)} limit={limit} setOffset={setOffset} />}
    </>
  )
}

export default CharacterList;