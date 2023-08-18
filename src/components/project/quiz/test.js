import React, { createContext, useContext, useEffect, useState } from "react";
import './Quiz.css';
import { DataContext } from "./Quiz-index";

export const questions = [
 { question: 'What _______ when I called?',
  A: 'Were you doing',
  B: 'Was you doing',
  answer: "A"
},
 { question: 'You can use my car ______ tomorrow.',
  A: 'Until',
  B: 'Since',
  answer: "A"
},
 { question: 'I never have _______ such a boring book!',
  A: 'Read',
  B: 'Saw', 
  answer: "A"
},
 { question: 'Please, let me _______!',
  A: 'Think',
  B: 'Have',
  answer: "A"
}

]


const Test = () => {
  const [data,setData] = useState(0) // เข้าถึง index
  const [selectChoice,setSelectChoice] = useState('')
  const {score,setScore,setQuiz} = useContext(DataContext)
  
  useEffect(()=>{
    checkAnswer()
  },[selectChoice])

  const checkAnswer = ()=>{
    if(selectChoice!== ''){
      if(selectChoice === questions[data].answer){
        console.log('correct');
        setScore(score+1)
        nextQuestion()
      }
      else{
        console.log('incorrect')
        nextQuestion() 
        }
    }
  }

  const nextQuestion = ()=>{
    setSelectChoice('') //clear choice ให้เปนค่าว่างหลังจาก click
    if(data === questions.length-1)setQuiz('score') //data 0-3
    setData(data+1)
  }
  return (
    <div className="test">
      <h3 className="question"> {questions[data].question}</h3>
      <div className="btn-test">
        <button onClick={()=>setSelectChoice('A')} className="choice">{questions[data].A}</button>
        <button onClick={()=>setSelectChoice('B')} className="choice">{questions[data].B}</button>
      </div>
      <p className="showscore">{`${data +1}/${questions.length} `}</p>
    </div>
  )
}

export default Test
