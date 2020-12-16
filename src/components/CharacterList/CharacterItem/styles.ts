import styled from "styled-components";
import breakpoints from "src/styles/breakpoints";
import { red, white, gray } from "src/styles/colors";

export default styled.div`

a {
    text-decoration: none;

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
      outline: none;

      img {
        width: 20px;
        height: 20px;
      }
    }
  }

`