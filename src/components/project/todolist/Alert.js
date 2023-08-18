import React, { useEffect } from 'react'
import "./Todolist.css";

const Alert = ({msg,type,setAlert,list}) => {
    useEffect(()=>{
        const timeout =setTimeout(() => {
            setAlert([{show:false,msg:'',type:''}])
        }, 2000);
        return()=>clearTimeout(timeout)
        // eslint-disable-next-line 
    },[list])
  return (
    <div className= {`alert ${type}`} >{msg}</div>
  )
}

export default Alert