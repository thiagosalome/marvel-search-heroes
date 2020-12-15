import styled, { css } from "styled-components";
import { red, white } from "src/styles/colors";

type ToggleButtonStyleProps = {
  active: boolean;
}

export default styled.button<ToggleButtonStyleProps>`
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
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
    transition: all 0.5s ease-in-out;

    ${(props: ToggleButtonStyleProps) => {
      if (props.active) {
        return css`
          left: 40px;
          background-color: ${red[500]};
          box-shadow: 0px 3px 8px rgba(225, 0, 0, 0.603748);
        `
      } else {
        return css`
          left: 10px;
          background-color: ${white};
        `
      }
    }}
  }
`