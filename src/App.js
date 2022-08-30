import React, { useEffect, useState } from "react";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Alert from "./components/alert/Alert";
import AppCss from "./App.module.css";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const myList = localStorage.getItem("lists") !== null ? JSON.parse(localStorage.getItem("lists")) : [];
  const myCount = localStorage.getItem("counts") !== null ? JSON.parse(localStorage.getItem("counts")) : 0;

  const [list, setList] = useState(myList);
  const [text, setText] = useState("");
  const [count, setCount] = useState(myCount);
  const [alert, setAlert] = useState({ show: false, text: "Todo added" });
  const [edit,setEdit] = useState(false);
  const [id,setId]= useState(0)


  useEffect(() => {
    localStorage.setItem("counts", JSON.stringify(count));
  }, [list])


  const changeText = (e) => {
    setText(e.target.value);
  }
  
  const handleEdit = (id) =>{
    let editList = list.find((item)=>{
      return item.id === id
    });
    let {name} = editList;
    setText(name);
    setEdit(true);
    setId(id);
  }
  const handlerSubmit = (e) => {
    e.preventDefault();
    if(edit){
      let tempList = list.map(item=>{
        console.log(item);
        return item.id===id ? {...item,text} : item
      });
      setList((tempList));
      setEdit(false);
    }
    
    const newList = {
      id: uuidv4(),
      name: text,
      completed: false
    }
    const updateLists = [...list, newList];
    setList(updateLists);
    localStorage.setItem("lists", JSON.stringify(updateLists));
    setCount(count + 1);
    setText("");
    setAlert({ show: true, text: "Todo added" });
    setTimeout(() => {
      setAlert({ show: false })
    }, 2000)
    
    
  }

  const deleteItem = (id) => {
    const delItem = list.filter(item => {
      return item.id !== id
    })
    setList(delItem);
    localStorage.setItem("lists", JSON.stringify(delItem));
    setCount(count - 1);
    setAlert({ show: true, text: "Todo deleted" });
    setTimeout(() => {
      setAlert({ show: false })
    }, 2000)
  }




  return (
    <>
      {alert.show && <Alert alert={alert} />}
      <div className={AppCss.container}>
        <div className={AppCss.todo_container}>
          <h1 className={AppCss.header}>Todos <span>({count})</span></h1>
          <Input text={text} changeText={changeText} handlerSubmit={handlerSubmit} edit={edit} />
          <TodoList list={list} deleteItem={deleteItem} handleEdit={handleEdit} />
        </div>
      </div>
    </>
  );
}

export default App;
