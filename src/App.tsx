import React, { useState } from 'react'
import { Difficulty, fetchQuestions, QuestionState } from './api'
import QuestionCard from './components/QuestionCard'
import { ButtonStyle, DifficultyCardStyle, DifficultyButton, GlobalStyle, TitleStyle, Wrapper } from './styles'
import StartIcon from './icons/start.svg'
import LogoIcon from './icons/triviaLogo.svg'
import NextIcon from './icons/next.svg'

export type AnswerObject = {
  question: string
  answer: string
  correct: boolean
  correctAnswer: string
}

const TOTAL_QUESTIONS = 10

const App = () => {
  const [loading, setLoading] = useState(false)
  const [questions, setQuestions] = useState<QuestionState[]>([])
  const [number, setNumber] = useState(0)
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([])
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(true)
  const [difficulty, setDifficulty] = useState<Difficulty | undefined>()

  const startTrivia = async() => {
    setLoading(true)
    setGameOver(false)

    try {
      const newQuestions = await fetchQuestions(
        TOTAL_QUESTIONS,
        difficulty
      )
      setQuestions(newQuestions)
      setScore(0)
      setUserAnswers([])
      setNumber(0)
      setLoading(false)
    } catch(error) {
      console.log(error)
    }
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value
      const correct = questions[number].correct_answer === answer
      if (correct) setScore(prev => prev + 1)
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }
  }

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <TitleStyle>
          <img src={LogoIcon} alt='Vinyl disc as logo' />
          <h1>MUSIC TRIVIA</h1>
        </TitleStyle>
        {(gameOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <>
            <DifficultyCardStyle>
              <p>CHOOSE DIFFICULTY:</p>
              <DifficultyButton clicked={difficulty===Difficulty.EASY} onClick={() => setDifficulty(Difficulty.EASY)}>EASY</DifficultyButton>
              <DifficultyButton clicked={difficulty===Difficulty.MEDIUM} onClick={() => setDifficulty(Difficulty.MEDIUM)}>MEDIUM</DifficultyButton>
              <DifficultyButton clicked={difficulty===Difficulty.HARD} onClick={() => setDifficulty(Difficulty.HARD)}>HARD</DifficultyButton>
            </DifficultyCardStyle>
            {difficulty && 
              <ButtonStyle onClick={startTrivia}>
                <img className='start' src={StartIcon} alt='Start trivia'></img>
                START
              </ButtonStyle>
            }
          </>
        )}
        {(!gameOver && !loading) && <p className='score'>SCORE: {score}</p>}
        {loading && <p className='loading'>LOADING...</p>}
        {(!loading && !gameOver) && (
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {(!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1) &&
          <ButtonStyle onClick={nextQuestion}>
            NEXT QUESTION
            <img className='next' src={NextIcon} alt='Next question' />
          </ButtonStyle>
        }
      </Wrapper>
    </>
  )
}

export default App
