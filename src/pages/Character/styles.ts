import breakpoints from "src/styles/breakpoints";
import { gray, white } from "src/styles/colors";
import { Container } from "src/styles/grid";
import styled from "styled-components";

type WrapperStyleProps = {
  backgroundColor?: string;
}

export const Wrapper = styled.div<WrapperStyleProps>`
  background-color: ${(props: WrapperStyleProps) => props.backgroundColor ? props.backgroundColor : white};
  overflow-x: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Header = styled.header`
  padding: 20px 0;

  ${Container} {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    margin-right: 75px;

    img {
      max-width: 210px;
    }

    span {
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      overflow: hidden;
      clip: rect(0,0,0,0);
    }
  }

`

export const Info = styled.div`
  margin: 80px 0;
  width: 100%;
  max-width: 275px;
  position: relative;
  z-index: 2;

  @media (max-width: ${breakpoints.sm}) {
    max-width: 100%;
    margin: 20px 0 50px;
  }

  header {
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.sm}) {
      margin-bottom: 0;
    }

    h2 {
      font-size: 40px;
      font-weight: 800;
      color: ${gray[500]};
      text-transform: uppercase;
      margin: 0;
    }

    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      outline: none;

      img {
        width: 30px;
        height: 30px;
      }
    }
  }
  
  p {
    font-weight: 500;
    color: ${gray[500]};
    margin: 0;
  }
  
  > p {
    font-size: 16px;
    line-height: 28px;
    color: ${gray[200]};
  }

  > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 40px;
  }
`

export const InfoNumbers = styled.div`
  flex: 0 0 50%;

  p {
    font-size: 12px;
    margin-bottom: 10px;
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 13px;
      width: 30px;
    }

    span {
      font-size: 14px;
      font-weight: 500;
      color: ${gray[500]};
    }
  }
`

export const InfoRating = styled.div`
  margin: 28px 0;
  display: flex;
  align-items: center;

  p {
    font-size: 12px;
    margin-right: 15px;
  }

  span {
    -webkit-background-clip: text;
    font-size: 28px;
  }
`

export const InfoLast = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 13px;
    margin-right: 15px;
  }

  span {
    font-size: 12px;
    font-weight: 500;
    color: ${gray[500]};
  }
`

export const BackgroundName = styled.p`
  font-size: 250px;
  font-weight: bold;
  color: ${white};
  position: absolute;
  text-transform: uppercase;
  top: 150px;
  left: 0;
  text-align: center;
  margin: 0;
  cursor: default;
  user-select: none;
  word-break: break-word;
  width: 100%;
  height: 460px;
  overflow: hidden;
  line-height: 0.9;
  opacity: 0.5;

  @media (max-width: ${breakpoints.md}) {
    font-size: 250px;
  }

  @media (max-width: ${breakpoints.sm}) {
    font-size: 100px;
    top: 260px;
  }
`

type ImageCharacterStyleProps = {
  screen: string;
}

export const ImageCharacter = styled.img<ImageCharacterStyleProps>`
  position: absolute;
  z-index: 1;
  max-width: 590px;
  top: 150px;
  left: 50%;
  transform: translateX(-25%);
  display: ${(props: ImageCharacterStyleProps) => ( props.screen === 'mobile' ? 'none' : 'block' )};
  
  @media (max-width: ${breakpoints.md}) {
    max-width: 450px;
    top: 150px;
    transform: translateX(-15%);
  }
  
  @media (max-width: ${breakpoints.sm}) {
    position: relative;
    top: 0;
    left: 0;
    transform: translateX(0);
    max-width: 100%;
    margin: 20px auto;
    display: ${(props: ImageCharacterStyleProps) => ( props.screen === 'desktop' ? 'none' : 'block' )};
  }
`