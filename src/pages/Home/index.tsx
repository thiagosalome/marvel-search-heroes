import React from 'react';
import { Link } from 'react-router-dom'

// Components
import CharacterList from 'src/components/CharacterList';
import Footer from 'src/components/Footer';

// Assets
import Logo from 'src/images/logo.png'

// Styles
import { Header, SubHeader } from './styles'
import { Container } from 'src/styles/grid';

const Home: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <h1>
            <Link to='/'>
              <img src={Logo} alt='Marvel Search Heroes' title='Marvel Search Heroes'  />
              <span>Marvel Search Heroes</span>
            </Link>
          </h1>
        </Container>
      </Header>
      <main>
        <Container>
          <SubHeader>
            <h2>Explore o universo</h2>
            <p>Mergulhe no domínio deslumbrante de todos personagens clássicos que você ama - e aqueles que você descobrirá em breve!</p>
          </SubHeader>
          <CharacterList />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Home;