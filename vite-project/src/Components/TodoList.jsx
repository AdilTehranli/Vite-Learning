import React from 'react'
import Todo from './Todo'

const TodoList = ({todo,onRemove,updateTodo}) => {
  return (
    <div style={{width:'100%', marginTop:"50px"}}>

    {
      todo && todo.map((todos,index) => (

        <Todo key={index}   todos={todos}  onRemove={onRemove} updateTodo={updateTodo}/>
      ))
    }

    </div>
  )
}

export default TodoList