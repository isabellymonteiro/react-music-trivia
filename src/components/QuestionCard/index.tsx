import React from 'react'
import { AnswerObject } from '../../App'

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
        <div>
            <p className='number'> 
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p>{question}</p>
            <div>
                {answers.map(answer => (
                    <div key={answer}>
                        <button disabled={!!userAnswer} value={answer} onClick={callback}>
                            <span>{answer}</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard