import React from 'react';
import Routes from './routes';
import GlobalStyle from './styles/global'

// Hooks
import useLocalStorage from 'src/hooks/useLocalStorage'

// Contexts
import FavoritesContext from './contexts/FavoritesContext'

// Types
import { CharacterProps } from './types/Character';

function App() {
  const [ favorites, setFavorites ] = useLocalStorage<CharacterProps[]>('@msh/favorites', [])

  return (
    <>
      <GlobalStyle />
      <FavoritesContext.Provider value={{
        favorites: favorites as CharacterProps[],
        setFavorites: setFavorites as (value: CharacterProps[]) => void
      }}>
        <Routes />
      </FavoritesContext.Provider>
    </>
  ) 
}

export default App;
