import React, {useContext } from 'react'
import { DataContext } from './Quiz-index'


const Menu = () => {
   const {setQuiz} = useContext(DataContext)//เรียกใช้ context
  return (
    <div className='menu'>
       
        <button className='topic' onClick={()=>setQuiz('test')}>READY</button>
    </div>
  )
}

export default Menu