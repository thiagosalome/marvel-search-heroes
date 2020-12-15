import React from 'react';
import { Link } from 'react-router-dom'

// Components
import InternalSearch from 'src/components/InternalSearch';
import ComicList from 'src/components/ComicList';
import Footer from 'src/components/Footer';

// Assets
import Logo from 'src/images/logo.png'
import HeartIcon from 'src/images/icons/heart.svg'
import ComicIcon from 'src/images/icons/comic.svg'
import MoviesIcon from 'src/images/icons/movies.svg'
import HulkImage from 'src/images/hulk-image.png'

// Styles
import { Wrapper, Header, Info, InfoNumbers, InfoRating, InfoLast, BackgroundName, ImageCharacter } from './styles'
import { Container } from 'src/styles/grid';

const Character: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Container>
          <h1>
            <Link to='/'>
              <img src={Logo} alt='Marvel Search Heroes' title='Marvel Search Heroes'  />
              <span>Marvel Search Heroes</span>
            </Link>
          </h1>
          <InternalSearch />
        </Container>
      </Header>
      <main>
        <section id='informacoes'>
          <Container>
            <Info>
              <header>
                <h2>Hulk</h2>
                <button><img src={HeartIcon} alt=''/></button>
              </header>
              <ImageCharacter screen='mobile' src={HulkImage} />
              <p>O Hulk, por vezes referido como O Incrível Hulk é um personagem de quadrinhos/banda desenhada do gênero super-herói, propriedade da Marvel Comics, editora pela qual as histórias do personagem são publicados desde sua criação, nos anos 1960</p>
              <div>
                <InfoNumbers>
                  <p>Quadrinhos</p>
                  <div>
                    <img src={ComicIcon} alt=''/>
                    <span>3.000</span>
                  </div>
                </InfoNumbers>
                <InfoNumbers>
                  <p>Filmes</p>
                  <div>
                    <img src={MoviesIcon} alt=''/>
                    <span>3.000</span>
                  </div>
                </InfoNumbers>
                <InfoRating>
                  <p>Rating:</p>
                  <span style={{ backgroundImage: `linear-gradient(90deg, rgb(255, 21, 16) 80%, rgb(197, 200, 212) 20%)`, WebkitTextFillColor: 'transparent' }}>★★★★★</span>
                </InfoRating>
                <InfoLast>
                  <p>Último quadrinho</p>
                  <span>13 fev. 2020</span>
                </InfoLast>
              </div>
            </Info>
            <ImageCharacter screen='desktop' src={HulkImage} />
            <BackgroundName>Hulk</BackgroundName>
          </Container>
        </section>
        <section id='ultimos-lancamentos'>
          <Container>
            <h3>Últimos lançamentos</h3>
            <ComicList />
          </Container>
        </section>
      </main>
      <Footer />
    </Wrapper>
  )
}

export default Character;