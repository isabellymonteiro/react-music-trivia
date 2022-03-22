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
  height: 100vh;
  flex-direction: column;
  align-items: center;
  .score,
  .loading {
    margin-top: 0;
    color: #90a4ae;
    font-size: clamp(16px, 4vw, 20px);
    align-self: start;
    font-weight: 600;

    @media (min-height: 620px)
      {
        margin-top: clamp(0px, 8vh, 200px);
      }
  }

  .loading {
    align-self: center;
  }

  .finalScore {
    font-size: 22px;
    color: #fff;
    font-weight: 500;
  }

  .gif {
    width: 100%;
    max-height: 400px;
  } 
`

export const TitleStyle = styled.div`
  display: flex;
  color: #ffc107;
  font-size: clamp(12px, 2vw, 22px);
  margin-top: 10px;

  img {
    margin-right: 10px;
  }
`

export const DifficultyCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: clamp(50px, 8vh, 100px);
  align-items: center;
  justify-content: center;
  background: #34495e; 
  border-radius: 40px;
  border: 1px solid #ffc107;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  width: clamp(240px, 50vw, 400px);
  max-height: 400px;
  padding: 10px 20px 20px 20px;

  p {
    color: #fff;
    font-size: clamp(16px, 3vw, 22px);
    font-weight: 500;
    margin: 20px 0;
    }

  @media (min-height: 620px)
  {
     margin-top: clamp(50px, 20vh, 300px);
  }
`

export const DifficultyButton = styled.button<Props>`
  cursor: pointer;
  color: #263238;
  user-select: none;
  font-size: clamp(16px, 3vw, 22px);
  width: 100%;
  height: clamp(20px, 6vh, 60px);
  margin: 5px 0;
  border: 0;
  border-radius: 10px;
  background: ${({ clicked }) => clicked ? '#ffd966' : '#90a4ae'};
  :hover {
    opacity: 0.8;
  }

  @media (min-width: 700px)
  {
    font-size: 24px;
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
