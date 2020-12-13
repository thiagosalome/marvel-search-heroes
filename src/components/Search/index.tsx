import React from 'react';

// Assets
import SearchIcon from 'src/images/icons/search.png'

const Search: React.FC = () => {
  return (
    <div>
      <span><img src={SearchIcon} alt=''/></span>
      <input type='text' placeholder='Procure por heróis'/>
    </div>
  )
}

export default Search;