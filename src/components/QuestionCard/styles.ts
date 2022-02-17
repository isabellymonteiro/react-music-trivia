import styled from 'styled-components'

interface Props {
  correct: boolean;
  clicked: boolean;
}

export const QuestionCardStyle = styled.div`
  width: 800px;
  max-height: 400px;
  background: #34495e;
  border-radius: 40px;
  border: 1px solid #ffc107;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #ffffff;
  padding: 20px;

  p {
    font-size: 20px;
  }

  .questionNumber {
    margin: 0;
    color: #90a4ae;
    font-weight: 600;
  }
`

export const ButtonStyle = styled.div<Props>`

  button {
    cursor: pointer;
    color: #263238;
    user-select: none;
    font-size: 18px;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    border: 0;
    border-radius: 10px;
    background: ${({ correct, clicked }) => 
      correct 
        ? '#56ffa4'
        : (!correct && clicked
        ? '#ff5656'
        : null)
    }
  }

  :hover {
    opacity: 0.8;
  }
`
