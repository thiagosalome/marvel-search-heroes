import styled from 'styled-components';
import { gray } from 'src/styles/colors';
import breakpoints from 'src/styles/breakpoints';

export const Header = styled.header`
  padding: 35px 0 40px;

  @media (max-width: ${breakpoints.sm}) {
    padding: 25px 0 20px;
  }

  h1 {
    margin: 0;

    img {
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 330px;

      @media (max-width: ${breakpoints.sm}) {
        max-width: 160px;
      }
    }

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
    }
  }

  
`;

export const SubHeader = styled.div`
  margin-bottom: 55px;
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: 800;
    text-transform: uppercase;
    color: ${gray[500]};
    margin-top: 0;
    margin-bottom: 8px;

    @media (max-width: ${breakpoints.sm}) {
      font-size: 26px;
    }
  }

  p {
    font-size: 14px;
    font-weight: 500;
    color: ${gray[200]};
    margin: 0;
  }
`