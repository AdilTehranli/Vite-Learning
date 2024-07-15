import React from 'react'
import '../css/Product.css'

const Product = ({product}) => {

    const {id,title,price,description,image}=product

    console.log(image);
    return (
    <div className="card">
        <img className="image" src={image} alt="" />
        <div>
            <p>{title}</p>
            <h3>{price}$</h3>
        </div>
        <button className="detail-button">Detail</button>
    </div>
  )
}

export default Product