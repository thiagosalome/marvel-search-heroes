import React from 'react';

// Assets
import SearchIcon from 'src/images/icons/search.svg'

// Styles
import SearchStyle from './styles'

const Search: React.FC = () => {
  return (
    <SearchStyle>
      <span><img src={SearchIcon} alt=''/></span>
      <input type='text' placeholder='Procure por heróis'/>
    </SearchStyle>
  )
}

export default Search;