import { gray, red } from "src/styles/colors";
import styled from "styled-components";

export default styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    outline: none;
    padding: 0;
  }

  > button {
    height: 20px;
    width: 20px;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 10px;
    list-style: none;

    li {
      margin: 0 3px;

      button {
        height: 30px;
        width: 30px;
        color: ${gray[500]};
        font-size: 18px;
        font-weight: 700;
        
        &.active {
          border-radius: 100%;
          border: 2px solid ${red[500]};
          color: ${red[500]};
        }
      }
    }
  }
`