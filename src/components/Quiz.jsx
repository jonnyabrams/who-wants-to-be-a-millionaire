import { useEffect, useState } from "react"
import useSound from 'use-sound'
import play from '../assets/sounds/play.mp3'
import correct from '../assets/sounds/correct.mp3'
import wrong from '../assets/sounds/wrong.mp3'
import wait from '../assets/sounds/short-wait.mp3'

const Quiz = ({ quizQuestions, setTimeElapsed, questionNumber, setQuestionNumber }) => {
  
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')
  const [letsPlay] = useSound(play)
  const [correctAnswer] = useSound(correct)
  const [wrongAnswer] = useSound(wrong)
  const [madeChoice] = useSound(wait)

  useEffect(() => {
    letsPlay()
  }, [letsPlay])

  useEffect(() => {
    setQuestion(quizQuestions[questionNumber - 1])
  }, [quizQuestions, questionNumber])

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  const handleClick = (answer) => {
    madeChoice()
    setSelectedAnswer(answer)
    setClassName('answer active')
    delay(3000, () => 
      setClassName(answer.correct ? "answer correct" : "answer incorrect")
    )
    delay(5000, () => {
      if (answer.correct) {
        correctAnswer()
        delay(1000, () => {
          setQuestionNumber((prev) => prev + 1)
          setSelectedAnswer(null)
        })
      } else {
        wrongAnswer()
        delay(1000, () => {
          setTimeElapsed(true)
        })
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