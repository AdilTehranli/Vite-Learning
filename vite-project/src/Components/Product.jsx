import React from 'react'
import {useNavigate} from 'react-router-dom'

const Product = ({product}) => {

    const {id,name,price} = product

    const navigate = useNavigate()
  return (
    <div>
        <div>Detail product</div>
        <h1>Name: {name}</h1>
        <p>Price: {price}</p>

        <button onClick={()=> navigate("/product-detail/" + id)}>show detail</button>
    </div>
  )
}

export default Product