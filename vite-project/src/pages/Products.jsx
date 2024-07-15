import React from 'react'
import Product from '../Components/Product'
import { products } from '../data/Products'

const Products = () => {



  return (
    <div>
      
      {
        products && products.map((product)=>(
          <Product key={product.id} product={product}/>
        ))
      }
    </div>
  )
}

export default Products