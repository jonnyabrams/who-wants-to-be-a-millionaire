import { useEffect, useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Timer from './components/Timer'
import Start from './components/Start'
import { moneyPyramid, quizQuestions } from './data'

const App = () => {
  const [username, setUsername] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeElapsed, setTimeElapsed] = useState(false)
  const [amountEarned, setAmountEarned] = useState("£0")

  useEffect(() => {
    questionNumber > 1 && setAmountEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [questionNumber])

  return (
    <div className="app">
      { username ? (
        <>
          <div className="main">
            { timeElapsed ? (
              <h1 className='end-text'>You earned: {amountEarned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer"><Timer setTimeElapsed={setTimeElapsed} questionNumber={questionNumber} /></div>
                </div>
                <div className="bottom">
                  <Quiz 
                    quizQuestions={quizQuestions} 
                    setTimeElapsed={setTimeElapsed}
                    questionNumber={questionNumber} 
                    setQuestionNumber={setQuestionNumber} 
                  />
                </div>
              </>
            )}
            
          </div>
          <div className="pyramid">
            <ul className='money-list'>
              { moneyPyramid.map((stage) => (
                <li className={ questionNumber === stage.id ? 'money-list-item active' : 'money-list-item' }>
                  <span className='money-list-item-number'>{stage.id}</span>
                  <span className='money-list-item-amount'>{stage.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : <Start setUsername={setUsername} /> }   
    </div>
  );
}

export default App
