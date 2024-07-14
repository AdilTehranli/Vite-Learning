import  {useState} from 'react'

import './App.css'
import Currency from './Components/Currency'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'
import { useSelector } from 'react-redux'
import { store } from './redux/store'
import UserList from './Components/UserList'
const App = () => {

  // const [todo,setTodo] = useState([])

  // const NewTodo = (createTodo)=>{
  //   setTodo([...todo,createTodo])
  // }

  // const removeTodo =(todoId) =>{
  //   setTodo([...todo.filter((todo) => todo.id!==todoId)])
  // }

  // const updateTodo =(newTodo) =>{
  //  const updatedTodo =   todo.map((todos) =>{
  //     if(todos.id !== newTodo.id){
  //       return todo
  //     }
  //       return newTodo
      


  //   })
  //   setTodo([...updatedTodo])

  // }

  // const {value} = useSelector((store) => store.counter)
  // console.log(value );




  return (
    <div style={{ width: '500px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        {/* <Currency/> */}
        {/* <TodoCreate  onClickTodo={NewTodo} /> */}
        {/* <TodoList todo={todo} onRemove={removeTodo} updateTodo={updateTodo}/> */}

        <UserList/>
    </div>
  )
}

export default App