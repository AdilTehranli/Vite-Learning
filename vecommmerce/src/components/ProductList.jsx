import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../redux/slices/ProductSlice";
import { store } from "../redux/Store";

const ProductList = () => {
  const dispatch = useDispatch();

  const { product } = useSelector((store) => store.product);
  console.log(product);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);

  return <div>ProductList</div>;
};

export default ProductList;
