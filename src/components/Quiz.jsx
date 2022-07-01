import { useEffect, useState } from "react"

const Quiz = ({ quizQuestions, setTimeElapsed, questionNumber, setQuestionNumber }) => {
  
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')

  useEffect(() => {
    setQuestion(quizQuestions[questionNumber - 1])
  }, [quizQuestions, questionNumber])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (answer) => {
    setSelectedAnswer(answer)
    setClassName('answer active')
    delay(3000, () => 
      setClassName(answer.correct ? "answer correct" : "answer incorrect")
    )
    delay(6000, () => {
      if (answer.correct) {
        setQuestionNumber((prev) => prev + 1)
        setSelectedAnswer(null)
      } else {
        setTimeElapsed(true)
      }
    })
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