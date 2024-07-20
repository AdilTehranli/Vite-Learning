import React from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const Todo = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between",marginTop:20}}>
      <div>First todo</div>
      <div>
        <MdDelete style={{marginRight:10,fontSize:20}} />
        <FaEdit style={{fontSize:20}} />
      </div>
    </div>
  );
};

export default Todo;
