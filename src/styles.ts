import styled, { createGlobalStyle } from 'styled-components'

interface Props {
  clicked: boolean
}

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

export const DifficultyCardStyle = styled.div`
  p {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
  }
`

export const DifficultyButton = styled.button<Props>`
  cursor: pointer;
  color: #263238;
  user-select: none;
  font-size: 18px;
  width: 100%;
  height: 40px;
  margin: 5px 0;
  border: 0;
  border-radius: 10px;
  background: ${({ clicked }) => clicked ? '#ffd966' : '#90a4ae'};
  :hover {
    opacity: 0.8;
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
