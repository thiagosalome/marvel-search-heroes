import styled from "styled-components";
import { gray, red } from "src/styles/colors";
import breakpoints from "src/styles/breakpoints";

export default styled.div`
  height: 67px;
  display: flex;
  background-color: ${red[100]};
  border-radius: 35px;
  width: 100%;
  max-width: 880px;
  margin: 55px auto;

  @media (max-width: ${breakpoints.sm}) {
    height: 50px;
    margin: 35px auto;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 30px;
    padding-right: 20px;

    @media (max-width: ${breakpoints.sm}) {
      padding-left: 20px;
      padding-right: 10px;
    }

    img {
      width: 30px;
      height: 30px;

      @media (max-width: ${breakpoints.sm}) {
        width: 18px;
        height: 18px;
      }
    }
  }

  input {
    padding: 20px;
    background-color: transparent;
    border: none;
    outline: none;
    width: 100%;
    color: ${gray[200]};
    font-size: 18px;

    &::placeholder {
      color: ${red[500]};
      opacity: 0.6;
    }
  }
`