import styled from "styled-components";
import { gray, white } from "src/styles/colors";
import breakpoints from "src/styles/breakpoints";

export default styled.div`
  height: 40px;
  display: flex;
  background-color: ${white};
  border-radius: 35px;
  width: 100%;
  max-width: 540px;
  margin: 20px 0;

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
`