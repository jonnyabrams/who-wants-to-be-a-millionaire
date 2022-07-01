import { useEffect, useState } from "react"

const Quiz = ({ quizQuestions, setTimeOut, questionNumber, setQuestionNumber }) => {
  
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')

  useEffect(() => {
    setQuestion(quizQuestions[questionNumber - 1])
  }, [quizQuestions, questionNumber])

  const handleClick = (answer) => {
    setSelectedAnswer(answer)
    setClassName('answer active')
  }
  
  return (
    <div className="quiz">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((answer) => (
          <div 
            className={ selectedAnswer === answer ? className : 'answer' } 
            onClick={() => handleClick(answer)}
          >
            {answer.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Quiz