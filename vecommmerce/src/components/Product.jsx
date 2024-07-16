import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

    const {id,title,price,description,image}=product

    const navigate = useNavigate()

    return (
    <div className="card">
        <img className="image" src={image} alt="" />
        <div>
            <p>{title}</p>
            <h3>{price}$</h3>
        </div>
        <button className="detail-button" onClick={()=>navigate("/product-details/" + id)}>Detail</button>
    </div>
  )
}

export default Product