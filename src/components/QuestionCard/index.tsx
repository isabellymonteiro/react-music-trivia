import React from 'react'
import { AnswerObject } from '../../App'
import { ButtonStyle, QuestionCardStyle } from './styles'

interface Props {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNumber: number
    totalQuestions: number
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuestions
}) => {
    return (
        <QuestionCardStyle>
            <p className='questionNumber'> 
                QUESTION: {questionNumber} / {totalQuestions}
            </p>
            <p>{question}</p>
            <div>
                {answers.map(answer => (
                    <ButtonStyle 
                        key={answer}
                        correct={userAnswer?.correctAnswer === answer} 
                        clicked={userAnswer?.answer === answer}
                    >
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span>{answer}</span>
                        </button>
                    </ButtonStyle>
                ))}
            </div>
        </QuestionCardStyle>
    )
}

export default QuestionCard
