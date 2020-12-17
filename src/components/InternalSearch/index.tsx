import React, { useState, useEffect, ChangeEvent, useRef, useMemo, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom'

// Types
import { CharacterProps } from 'src/types/Character';

// Hooks
import useClickOutside from 'src/hooks/useClickOutside';

// Assets
import SearchIcon from 'src/images/icons/search.svg'

// Services
import api from 'src/services/api'

// Styles
import InternalSearchStyle from './styles'

const InternalSearch: React.FC = () => {
  const searchRef = useRef<HTMLDivElement>(null)
  const history = useHistory()
  const [ nameStartsWith, setNameStartsWith ] = useState('')
  const [ characters, setCharacters ] = useState<CharacterProps[]>([])
  const showSearchList = useMemo(() => characters.length > 0, [characters])
  useClickOutside(searchRef, closeSearch)

  useEffect(() => {
    async function getCharacters() {
      const { data } = await api.get('/characters', {
        params: {
          nameStartsWith: nameStartsWith ? nameStartsWith : null
        }
      })
      setCharacters(data.data.results)
    }

    if (nameStartsWith.length >= 3) {
      getCharacters()
    }
  }, [ nameStartsWith ])

  function handleSearchChange(evt: ChangeEvent<HTMLInputElement>) {
    const { value } = evt.target
    if (value.length >= 3) {
      setNameStartsWith(value)
    } else {
      closeSearch()
    }
  }

  function redirectToCharacter(evt: MouseEvent<HTMLAnchorElement>) {
    evt.preventDefault()
    closeSearch()
    const splittedUrl = evt.currentTarget.href.split('/')
    history.push(splittedUrl[splittedUrl.length - 1])
  }

  function closeSearch () {
    setCharacters([])
  }

  return (
    <InternalSearchStyle>
      <span><img src={SearchIcon} alt='Buscar' title='Buscar'/></span>
      <input onChange={handleSearchChange} type='text' placeholder='Procure por heróis (Digite pelo menos 3 caracteres)'/>
      {
        showSearchList && (
          <div ref={searchRef}>
            <ul>
              {
                characters.map((character: CharacterProps) => (
                  <li key={character.id}>
                    <a onClick={redirectToCharacter} href={`/${character.id}`}>{character.name}</a>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </InternalSearchStyle>
  )
}

export default InternalSearch;