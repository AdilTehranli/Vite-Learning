import React, {useState} from 'react'
import '../App.css'

const TodoCreate = ({onClickTodo}) => {

  const [newTodo,setNewTodo] = useState('')

  const todoClear = () =>{
    setNewTodo('')
  }
  
  const createTodo = () =>{
    if(!createTodo) return;
    
    const request = {
      id : Math.floor(Math.random() * 999999999),
      content: newTodo
    }
    onClickTodo(request)
    todoClear()
  }
  return (
    <div className="todo_create">
        <input
        value = {newTodo}
        onChange = {(e) => setNewTodo(e.target.value)}
        className="todo_input" type="text" placeholder="Todo yazin" />
        <button onClick={createTodo} className="todo_btn">Create </button>
    </div>
  )
}

export default TodoCreate