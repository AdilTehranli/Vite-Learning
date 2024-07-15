import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/slices/ProductSlice";
import { store } from "../redux/Store";
import Product from "./Product";

const ProductList = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((store) => store.product);
  console.log(product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return <div className="flex-row" style={{flexWrap: 'wrap',marginTop:'25px'}}>
    {
      product && product.map((products)=>(
        <Product key={products.id} product={products}/>
      ))
    }
  </div>;
};

export default ProductList;
