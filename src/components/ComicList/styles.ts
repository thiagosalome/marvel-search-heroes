import breakpoints from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  column-gap: 35px;
  row-gap: 100px;
  grid-template-columns: repeat(6, 1fr);
  margin: 65px 0;
  
  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
    row-gap: 70px;
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 30px;
  }
`;

export const Comic = styled.div`

  img {
    max-width: 100%;
  }
`