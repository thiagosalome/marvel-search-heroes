import { red } from "src/styles/colors";
import styled from "styled-components";

export default styled.button`
  height: 40px;
  width: 70px;
  border-radius: 20px;
  border: none;
  background-color: #E4E5E9;
  position: relative;
  outline: none;
  cursor: pointer;
  margin: 0 10px;

  span {
    height: 20px;
    width: 20px;
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${red[500]};
    box-shadow: 0px 3px 8px rgba(225, 0, 0, 0.603748);
    border-radius: 100%;
  }
`