import React, { ChangeEvent } from 'react';

// Assets
import SearchIcon from 'src/images/icons/search.svg'

// Styles
import MainSearchStyle from './styles'

type MainSearchProps = {
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void
}

const MainSearch: React.FC<MainSearchProps> = ({ onChange }: MainSearchProps) => {
  return (
    <MainSearchStyle>
      <span><img src={SearchIcon} alt='Buscar' title='Buscar'/></span>
      <input onChange={onChange} type='text' placeholder='Procure por heróis (Digite pelo menos 3 caracteres)'/>
    </MainSearchStyle>
  )
}

export default MainSearch;