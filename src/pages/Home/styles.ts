import styled from 'styled-components';

export const Header = styled.header`
  padding: 35px 0 20px;

  img {
    display: block;
    margin: 0 auto;
    max-width: 330px;
  }
  
  span {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
  }
`;

export const SubHeader = styled.div`
  margin-bottom: 55px;

  h2 {
    font-size: 32px;
    font-weight: 800;
  }

  p {

  }
`