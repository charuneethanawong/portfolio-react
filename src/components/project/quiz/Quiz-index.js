import React, { createContext, useState } from 'react'
import './Quiz.css'
import Menu from './Menu'
import Score from './Score'
import Test from './test'

export const DataContext = createContext()
const Quiz = () => {
  const [quiz,setQuiz] = useState('menu')
  const [score,setScore] = useState(0)
  return (
    <DataContext.Provider value={{quiz,setQuiz,score,setScore}}>
      <h1 className='title'>Let's Quiz !!!</h1>
    <div className='quiz-container'>  
      {quiz === 'menu' && <Menu/>}
      {quiz === 'score' && <Score/>}
      {quiz === 'test' && <Test/>}
    </div>
    </DataContext.Provider>
  )
}

export default Quiz