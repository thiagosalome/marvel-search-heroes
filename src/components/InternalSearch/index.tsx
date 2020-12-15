import React from 'react';

// Assets
import SearchIcon from 'src/images/icons/search.svg'

// Styles
import InternalSearchStyle from './styles'

const InternalSearch: React.FC = () => {
  return (
    <InternalSearchStyle>
      <span><img src={SearchIcon} alt=''/></span>
      <input type='text' placeholder='Procure por heróis'/>
    </InternalSearchStyle>
  )
}

export default InternalSearch;