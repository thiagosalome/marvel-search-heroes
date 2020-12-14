import styled from 'styled-components';
import { gray, red, white } from 'src/styles/colors';
import breakpoints from 'src/styles/breakpoints';

export const Container = styled.div`
  
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;

  p {
    font-size: 18px;
    font-weight: 500;
    color: ${gray[200]};

    @media (max-width: ${breakpoints.sm}) {
      margin-bottom: 25px;
    }
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;


    > button {
      display: flex;
      align-items: center;
      border: none;
      background-color: transparent;
      cursor: pointer;
      outline: none;

      &:last-child {
        margin-left: 20px;
      }

      @media (max-width: ${breakpoints.sm}) {
        margin-left: 0 !important;
        margin-bottom: 10px;
        flex: 1 0 auto;
      }

      img {
        width: 18px;
        margin-right: 15px;
      }

      span {
        font-size: 16px;
        font-weight: 500;
        color: ${red[500]};
        text-align: left;
      }
    }
  }
`

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 25px 0;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`

export const Character = styled.a`
  cursor: pointer;

  &:hover {

    figure img {
      transform: scale(1.1) rotate(5deg);
      filter: grayscale(50%);
    }
  }

  figure {
    position: relative;
    margin: 0;
    overflow: hidden;

    &::after {
      content: '';
      background-color: ${red[500]};
      height: 4px;
      width: 100%;
      bottom: 0;
      position: absolute;
      left: 0;
    }

    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      transition: all 0.5s ease-in-out;

      @media (max-width: ${breakpoints.md}) {
        height: 200px;
      }

      @media (max-width: ${breakpoints.sm}) {
        height: 150px;
      }
    }
  }

  div {
    background-color: ${white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 0;

    @media (max-width: ${breakpoints.sm}) {
      padding: 15px 0;
    }

    h3 {
      font-size: 20px;
      font-weight: 800;
      color: ${gray[500]};
      margin: 0;

      @media (max-width: ${breakpoints.sm}) {
        font-size: 16px;
      }
    }

    button {
      border: 0;
      background-color: transparent;
      cursor: pointer;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

`
