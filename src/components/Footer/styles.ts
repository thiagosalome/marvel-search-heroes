import styled from "styled-components";
import breakpoints from "src/styles/breakpoints";
import { red, white } from "src/styles/colors";


export default styled.footer`
  background-color: ${red[500]};
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${white};
  margin-top: auto;

  @media (max-width: ${breakpoints.sm}) {
    height: 55px;
  }
`