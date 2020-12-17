import React, { RefObject, useEffect, useRef, useState, SyntheticEvent } from 'react';
import { Link, useParams } from 'react-router-dom'
import ColorThief from 'colorthief'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

// Components
import InternalSearch from 'src/components/InternalSearch';
import ComicList from 'src/components/ComicList';
import Footer from 'src/components/Footer';

// Assets
import Logo from 'src/images/logo.svg'
import HeartIcon from 'src/images/icons/heart.svg'
import ComicIcon from 'src/images/icons/comic.svg'
import MoviesIcon from 'src/images/icons/movies.svg'

// Config
import api from 'src/config/api';

// Types
import { CharacterProps } from 'src/types/Character';
import { ComicProps } from 'src/types/Comic';

// Styles
import { Wrapper, Header, Info, InfoNumbers, InfoRating, InfoLast, BackgroundName, ImageCharacter } from './styles'
import { Container } from 'src/styles/grid';

type ParamsProps = {
  id: string;
}

const Character: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>()
  const { id } = useParams<ParamsProps>()
  const [ character, setCharacter ] = useState<CharacterProps>()
  const [ comics, setComics ] = useState<ComicProps[]>()
  const [ backgroundColor, setBackgroundColor ] = useState<string>()

  useEffect(() => {
    function generateRandomRating () {
      return Math.random() * (100 - 50) + 50
    }

    function getInfoCharacter() {
      const promiseCharacter = api.get(`/characters/${id}`)
      const promiseComic = api.get(`/characters/${id}/comics`)
      Promise.all([promiseCharacter, promiseComic])
        .then((values) => {
          setCharacter({
            ...values[0].data.data.results[0],
            rating: generateRandomRating()
          })
          setComics(values[1].data.data.results)
        })
    }

    getInfoCharacter()
  }, [id])

  function handleLoadImage(evt: SyntheticEvent<HTMLImageElement, Event>) {
    if (character) {
      const colorThief = new ColorThief()
      const result = colorThief.getColor(evt.target, 25);
      setBackgroundColor(`rgba(${(result.join(','))}, 0.3)`)
    }
  }

  if (!character || !comics) {
    return <p>Carregando...</p>
  }

  console.log('rating', character.rating)

  return (
    <Wrapper backgroundColor={backgroundColor}>
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
                <h2>{character.name}</h2>
                <button><img src={HeartIcon} alt='Favoritar' title='Desfavoritar'/></button>
              </header>
              <ImageCharacter
                screen='mobile'
                crossOrigin={"anonymous"}
                ref={imageRef as RefObject<HTMLImageElement>}
                src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
                onLoad={handleLoadImage}
              />
              <p>{character.description}</p>
              <div>
                <InfoNumbers>
                  <p>Quadrinhos</p>
                  <div>
                    <img src={ComicIcon} alt='Quadrinhos' title='Quadrinhos' />
                    <span>{character.comics.available}</span>
                  </div>
                </InfoNumbers>
                <InfoNumbers>
                  <p>Eventos</p>
                  <div>
                    <img src={MoviesIcon} alt='Eventos' title='Eventos' />
                    <span>{character.events.available}</span>
                  </div>
                </InfoNumbers>
                <InfoRating>
                  <p>Rating:</p>
                  <span style={{ backgroundImage: `linear-gradient(90deg, rgb(255, 21, 16) ${character.rating}%, rgb(255, 255, 255) ${100 - character.rating}%)`, WebkitTextFillColor: 'transparent' }}>★★★★★</span>
                </InfoRating>
                <InfoLast>
                  <p>Último quadrinho</p>
                  <span>{format(parseISO(comics[0].dates[0].date), "d MMM'.' yyyy", { locale: ptBR })}</span>
                </InfoLast>
              </div>
            </Info>
            <ImageCharacter
              crossOrigin={"anonymous"}
              ref={imageRef as RefObject<HTMLImageElement>}
              screen='desktop'
              src={`${character.thumbnail.path}/portrait_incredible.${character.thumbnail.extension}`}
              onLoad={handleLoadImage}
            />
            <BackgroundName>{character.name}</BackgroundName>
          </Container>
        </section>
        <section id='ultimos-lancamentos'>
          <Container>
            <h3>Últimos lançamentos</h3>
            <ComicList comics={comics} />
          </Container>
        </section>
      </main>
      <Footer />
    </Wrapper>
  )
}

export default Character;