import React from "react";
import { useEffect,useState } from "react";
const Product = () => {
  const [pow, usePow] = useState(0);

  let artir = () => {
    usePow(pow + 1);
  };
  let azalt = () => {
    if(pow <= 0){
    }else{
      usePow(pow - 1)
    }
  };
  useEffect(()=>{
    console.log(pow)
  })

  return (
    <div>
      <div>{pow}</div>
      <button onClick={artir}>+</button>
      <button onClick={azalt}>-</button>
    </div>
  );
};

export default Product;
