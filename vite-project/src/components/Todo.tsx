import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";

interface TodoProps{
  todoProps : TodoType
}

const Todo = ({todoProps}:TodoProps) => {
  const {id,content} = todoProps
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginTop:20}}>
      <div>{content}</div>
      <div>
        <MdDelete style={{marginRight:10,fontSize:20}} />
        <FaEdit style={{fontSize:20}} />
      </div>
    </div>
  );
};

export default Todo;
