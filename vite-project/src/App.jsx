import  {useState} from 'react'

import './App.css'
import Currency from './Components/Currency'
import TodoCreate from './Components/TodoCreate'
import TodoList from './Components/TodoList'
import { useSelector } from 'react-redux'
import { store } from './redux/store'
import UserList from './Components/UserList'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import Header from './Components/Header'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetail from './pages/ProductDetail'
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
    <div >
        {/* <Currency/> */}
        {/* <TodoCreate  onClickTodo={NewTodo} /> */}
        {/* <TodoList todo={todo} onRemove={removeTodo} updateTodo={updateTodo}/> */}
        {/* <UserList/> */}
        <Header/>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/about' element={<About/>} >
            <Route path='employee' element={<EmployeeAbout/>}/>
            <Route path='company' element={<CompanyAbout/>}/>
          </Route>
          <Route  path='/products' element={<Products/>} />
          <Route  path='/product-detail/:id' element={<ProductDetail/>} />
          <Route  path='/contact' element={<Contact/>} />
          <Route  path='*' element={<NotFoundPage/>} />
          
        </Routes>
    </div>
  )
}

export default App