import React,{useState} from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";


const Todo = ({todos,onRemove,updateTodo}) => {

  const {id,content} = todos

  const [editTable,setEditTable] = useState(false)

  const [newTodo,setNewTodo] = useState(content)
  
  const removeTodo =() =>{
    onRemove(id)
  }

  const updatedTodo=() =>{

    const request ={
      id:id,
      content : newTodo
    }
    updateTodo(request)
    setEditTable(false)
  }


  return (
    <div style={{width:'100%',display:'flex' ,flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <div >

          {
            editTable ? <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} type="text" /> : content
          }
        </div>
        <div>
            <IoIosRemoveCircle onClick={removeTodo}/>

            {
              editTable ? <FaCheck onClick={updatedTodo}/> :  <MdEdit  onClick={() => setEditTable(true)}/>

            }
        </div>
    </div>
  )
}

export default Todo