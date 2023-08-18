import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./Todolist.css";

const Showlist = ({ id, newList,removeList,editList }) => {
  return (
    
        
      <div className="showlist-container">
        <p className="title-showlist">{newList}</p>
        <div className="btn-list">
          <button className="btn-list-logo" onClick={()=>editList(id)} >
            <AiFillEdit />
          </button>
          <button className="btn-list-logo" onClick={()=>removeList(id)}>
            <AiFillDelete  />
          </button>
       
        </div>
      </div>
   
  );
};

export default Showlist;
