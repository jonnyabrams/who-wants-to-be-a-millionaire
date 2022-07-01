import { useState } from 'react'
import './App.css'
import { moneyPyramid } from './data'

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1)

  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">question and answers</div>
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
