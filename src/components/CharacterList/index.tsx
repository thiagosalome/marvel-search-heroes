import React from 'react';

// Assets
import HeroIcon from 'src/images/icons/hero.svg'
import HeartIcon from 'src/images/icons/heart.svg'
import HeartOutlineIcon from 'src/images/icons/heart-outline.svg'
import ToggleButton from '../ToggleButton';

// Styles
import { Container, TopBar, List, Character } from './styles';

const CharacterList: React.FC = () => {
  return (
    <Container>
      <TopBar>
        <p>Encontrados 20 heróis</p>
        <div>
          <button>
            <img src={HeroIcon} alt='Ordenar por nome - A/Z' title='Ordenar por nome - A/Z' />
            <p>Ordenar por nome - A/Z</p>
          </button>
          <ToggleButton />
          <button>
            <img src={HeartIcon} alt='Somente favoritos' title='Somente favoritos' />
            <p>Somente favoritos</p>
          </button>
        </div>
      </TopBar>
      <List>
        <Character>
          <figure>
            <img src='https://s3.amazonaws.com/uifaces/faces/twitter/geran7/128.jpg' alt=''/>
          </figure>
          <div>
            <h3>Star-Lord</h3>
            <button><img src={HeartOutlineIcon} alt='Favoritar' title='Favoritar' /></button>
          </div>
        </Character>
      </List>
    </Container>
  )
}

export default CharacterList;