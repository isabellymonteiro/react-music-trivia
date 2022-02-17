import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: #263238;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .score,
  .loading {
    color: #90a4ae;
    font-size: 20px;
    align-self: start;
    font-weight: 600;
  }

  .loading {
    align-self: center;
  }
  
`

export const TitleStyle = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  color: #ffc107;
  font-size: 22px;
  margin: auto;

  img {
    margin-right: 10px;
  }
`

export const ButtonStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #263238;
  font-size: 16px;
  font-weight: 800;
  background: #ffc107;
  border: 0;
  border-radius: 10px;
  padding: 12px;
  cursor: pointer;
  margin-top: 20px;

  img {
    width: 22px;
    height: 22px;
  }

  .start {
    margin-right: 12px;
  }

  .next {
    margin-left: 12px;
  }

  :hover {
    background: #ffd966;
  }
`
