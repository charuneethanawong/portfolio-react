import React, { useEffect, useState } from 'react'
import './Todolist.css'
import { v4 as uuidv4 } from 'uuid';
import Showlist from './Showlist';
import Alert from './Alert';
import axios from "axios";

const TodoList = () => {
    const [data,setData] = useState('')
    const [list,setList] =useState([]) //for storelist
    const [alert,setAlert] = useState({show:false,msg:'',type:''}) 
    const [checkEditList, setCheckEditList] = useState(false)
    const [editId, setEditId] = useState(null)

    const addData = (e)=>{
        e.preventDefault() //ให้คง data ที่แอดไปแสดงบนหน้าจอ
        console.log(data);
       if(!data){//แสดง alert
        setAlert({show:true,msg:"plese field your list!!",type:"error"})
       }
       else if(checkEditList && data){
       const result= list.map(item=>{
            if(item.id ===editId){return{...item,newList:data}}
            return item
        })
        setList(result)
        setData('')
        setCheckEditList(false)
        setEditId(null)
       }
       else{
        const storelist = {
            id: uuidv4(),
            newList: data
        }
        setList([...list,storelist]) //storelist = นำข้อมูลที่เพิ่มมาต่อเรื่อยๆ
        setData('') //clear text after add button
        setAlert({show:true,msg:"your list were created",type:"success"})
        }
    }
    //use uuid install ====> npm install uuid เพื่อกำหนด id

    const removeList=(id)=>{
       const result = list.filter(list=>list.id !== id) //
       setList(result)
    }
    const editList=(id)=>{
        setCheckEditList(true)
        setEditId(id)
        const searchList= list.find(item=>item.id === id)
        setData(searchList.newList)
    }

   

  return (
    <section className='container'>
        <h1 className='title'>Todo List</h1>
          {alert.show &&  <Alert {...alert} setAlert={setAlert} list={list}/> }
        <form className='form' onSubmit={addData}>
            <div className='form-control'>
            <input type='text' className='text-input-todo'
            value={data}
            onChange={(e)=>setData(e.target.value)}
            //e.target.value = data ที่ใส่ไปใน input
            />
            <button className='btn-todo'>{checkEditList ? "EDIT" :"ADD"}</button>

            </div>
        </form>
        <section className='showlist'>
            {list.map((data,index)=><Showlist key={index} {...data} removeList={removeList} editList={editList}/>)} 
                {/* {...data} = id = {data.id} newlist= {data.newlist} ,,ส่ง prop จาก list = id,newlist  */}
        </section>
    </section>
  )
}

export default TodoList