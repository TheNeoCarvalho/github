import styled, { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: #eee;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`;
 
export const Content = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Ops = styled.p`
    font-size: 18px;
`

export default GlobalStyle;