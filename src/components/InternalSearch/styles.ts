import styled from "styled-components";
import { gray, red, white } from "src/styles/colors";
import breakpoints from "src/styles/breakpoints";

export default styled.div`
  height: 40px;
  display: flex;
  background-color: ${white};
  border-radius: 35px;
  width: 100%;
  max-width: 540px;
  margin: 20px 0;
  position: relative;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 20px;

    @media (max-width: ${breakpoints.sm}) {
      padding-left: 20px;
      padding-right: 10px;
    }

    img {
      width: 17px;
      height: 17px;
    }
  }

  input {
    padding: 0 10px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: ${gray[200]};
    font-size: 12px;
    font-weight: 500;

    &::placeholder {
      color: ${gray[200]};
    }
  }

  div {
    position: absolute;
    left: 0;
    right: 0;
    top: 45px;
    background-color: ${white};
    z-index: 3;
    height: 220px;
    border-radius: 10px;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.2); 
      border-radius: 10px;
    }

    ul {
      list-style: none;
      padding: 10px;
      margin: 0;

      li {
        
        a {
          text-decoration: none;
          color: ${gray[200]};
          padding: 5px 10px;
          display: block;

          &:hover {
            color: ${red[500]};
          }
        }
      }
    }
  }
`