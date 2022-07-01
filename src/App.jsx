import { useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import { moneyPyramid, quizQuestions } from './data'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeElapsed, setTimeElapsed] = useState(false)

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
            <Quiz 
              quizQuestions={quizQuestions} 
              setTimeOut={setTimeElapsed}
              questionNumber={questionNumber} 
              setQuestionNumber={setQuestionNumber} 
            />
          </div>
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
    </div>
  );
}

export default App
