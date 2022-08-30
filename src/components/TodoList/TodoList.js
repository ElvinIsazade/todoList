import React from 'react'
import TodoItem from "./TodoItem";
import listCss from "./TodoList.module.css";


const TodoList = ({list,deleteItem,handleEdit}) => {
  return (

    <ul className={listCss.list}>
        {list.map(item =>{
          return <TodoItem item={item} key={list.id} deleteItem={deleteItem} handleEdit={handleEdit}/>
        })}
    </ul>
  )
}

export default TodoList;