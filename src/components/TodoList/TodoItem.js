import React from 'react';
import listCss from "./TodoList.module.css";
import {FaPen} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";

const TodoItem = ({item,deleteItem,handleEdit}) => {
  return (
        <li className={listCss.list_item} >
            <p className={listCss.list_text}>{item.name}</p>
            <div className={listCss.buttons}>
                <button className={listCss.edit} onClick={()=>handleEdit(item.id)}> <FaPen /> </button>
                <button className={listCss.delete} onClick={()=> deleteItem(item.id)}><FaTrash /></button>
            </div>
        </li>
  )
}

export default TodoItem;