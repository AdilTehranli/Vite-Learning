import React from 'react'

import {useParams} from 'react-router-dom'
import { products } from '../data/Products'
import Product from '../Components/Product'

const ProductDetail = () => {

    const {id} = useParams()
  return (
    <div>
        <h1>Product Detail</h1>
        {
            products && products.map((product)=>{
                if(product.id == id){
                    return <Product key={product.id} product={product}/>
                }
            })
        }
    </div>
  )
}

export default ProductDetail