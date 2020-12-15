import React from 'react';

// Assets
import HeroIcon from 'src/images/icons/hero.svg'
import HeartIcon from 'src/images/icons/heart.svg'
import HeartOutlineIcon from 'src/images/icons/heart-outline.svg'
import ToggleButton from '../ToggleButton';

// Styles
import { TopBar, List, Character } from './styles';

const CharacterList: React.FC = () => {
  return (
    <>
      <TopBar>
        <p>Encontrados 20 heróis</p>
        <div>
          <button>
            <img src={HeroIcon} alt='Ordenar por nome - A/Z' title='Ordenar por nome - A/Z' />
            <span>Ordenar por nome - A/Z</span>
          </button>
          <div>
            <ToggleButton />
          </div>
          <button>
            <img src={HeartIcon} alt='Somente favoritos' title='Somente favoritos' />
            <span>Somente favoritos</span>
          </button>
        </div>
      </TopBar>
      <List>
        {
          new Array(8).fill('').map(() => (
            <Character to='/character'>
              <figure>
                <img src='https://storage.googleapis.com/dystribute-media/Tdw6fnuXliHtBSMaOGHj.jpg' alt=''/>
              </figure>
              <div>
                <h3>Spider-Man</h3>
                <button><img src={HeartOutlineIcon} alt='Favoritar' title='Favoritar' /></button>
              </div>
            </Character>
          ))
        }
      </List>
    </>
  )
}

export default CharacterList;