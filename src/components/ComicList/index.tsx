import React from 'react';

import { Container, Comic } from './styles';

const ComicList: React.FC = () => {
  return (
    <Container>
      {
        new Array(12).fill('').map(() => (
          <Comic>
            <img src='https://i.annihil.us/u/prod/marvel/i/mg/b/70/50b515fa2e2ac/clean.jpg' alt=''/>
            <h4>The Incredible Hulk</h4>
          </Comic>
        ))
      }
    </Container>
  )
}

export default ComicList;