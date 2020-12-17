import React from 'react';

// Types
import { ComicProps } from 'src/types/Comic';

// Styles
import { Container, Comic } from './styles';

type ComicListProps = {
  comics: ComicProps[]
}

const ComicList: React.FC<ComicListProps> = ({ comics }: ComicListProps) => {
  return (
    <Container>
      {
        comics.slice(0, 12).map((comic: ComicProps) => (
          <Comic key={comic.id}>
            <img src={`${comic.thumbnail.path}/portrait_xlarge.${comic.thumbnail.extension}`} alt={comic.title} />
            <h4>{comic.title}</h4>
          </Comic>
        ))
      }
    </Container>
  )
}

export default ComicList;