import styled, { css } from 'styled-components';
import { gray, red, white } from 'src/styles/colors';
import breakpoints from 'src/styles/breakpoints';

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
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  margin: 25px 0;
  list-style: none;
  padding: 0;

  @media (max-width: ${breakpoints.md}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: ${breakpoints.sm}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`

export const OrderBySelect = styled.div`
  display: flex;
  align-items: center;

  select {
    border: none;
    background-color: transparent;
    color: ${red[500]};
    outline: none;
    margin-left: 10px;
    cursor: pointer;
  }
`

export const FavoritesButton = styled.button`
  padding: 0;
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
    margin-top: 20px;
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

`

type ToggleStyleProps = {
  active: boolean;
}


export const Toggle = styled.div<ToggleStyleProps>`
  height: 30px;
  width: 60px;
  border-radius: 20px;
  border: none;
  background-color: #E4E5E9;
  position: relative;
  outline: none;
  cursor: pointer;
  margin: 0 10px;

  @media (max-width: ${breakpoints.sm}) {
    margin-left: 0;
  }

  &::after {
    content: '';
    height: 15px;
    width: 15px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 100%;
    transition: all 0.3s ease-in-out;

    ${(props: ToggleStyleProps) => {
      if (props.active) {
        return css`
          left: 35px;
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