import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Quicksand", sans-serif;
    background: #272b35;
    color: #ffffff;
    scroll-behavior: smooth;
  }
`

export const Wrapper = styled.div`
  width: 80vw;
  margin: 10px auto;
`