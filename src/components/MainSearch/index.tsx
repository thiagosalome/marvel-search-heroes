import React from 'react';

// Assets
import SearchIcon from 'src/images/icons/search.svg'

// Styles
import MainSearchStyle from './styles'

const MainSearch: React.FC = () => {
  return (
    <MainSearchStyle>
      <span><img src={SearchIcon} alt=''/></span>
      <input type='text' placeholder='Procure por heróis'/>
    </MainSearchStyle>
  )
}

export default MainSearch;