import { createContext } from 'react'
import { CharacterProps } from 'src/types/Character'

const FavoritesContext = createContext({
  favorites: [] as CharacterProps[],
  setFavorites: function(){} as (value: CharacterProps[]) => void
})

export default FavoritesContext