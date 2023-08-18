import React, { useContext } from 'react'
import { DataContext } from './Quiz-index'
import { questions } from './test'

const Score = () => {
    const {setQuiz,score,setScore} = useContext(DataContext)
    const resetScore=()=>{
        setScore(0)
        setQuiz('menu')
    }
  return (
    <div className='score'>
        <h2 className='showscore'>Your Score</h2>
        <h2 className='showscore'>{score}/{questions.length}</h2>
        <button className='newtest' onClick={()=> resetScore()}>New Test</button>
    </div>
  )
}

export default Score