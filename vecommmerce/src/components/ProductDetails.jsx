import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct } from "../redux/slices/ProductSlice";
import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";

const ProductDetails = () => {
  const { id } = useParams();
  const [count, setCount] = useState(0)  
  const { product, selectedProduct } = useSelector((store) => store.product);
  const { title, price, description, image } = selectedProduct;


    const increment =()=>{
        setCount(count+1)
    }
    const decremenet =() =>{
        if(count <= 0){
            alert("don't less than 0 ")
        }
        else{
            setCount(count-1)
        }
    }

  const dispatch = useDispatch();

  useEffect(() => {
    getProductById();
  }, []);

  const getProductById = () => {
    product &&
      product.map((products) => {
        if (products.id == id) {
          dispatch(setSelectedProduct(products));
        }
      });
  };

  return (
    <div>
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div style={{ marginRight: "40px" }}>
          <img src={image} width={500} height={100} alt="" />
        </div>
        <div>
          <h1>{title}</h1>
          <h3>{description}</h3>
          <h1>{price}</h1>

          <div style={{ display: "flex", alignItems: "center" }}>
            <CiCirclePlus onClick={increment} style={{ fontSize: "40px" }} />{" "}
            <span style={{ fontSize: "35px" }}>{count}</span>{" "}
            <CiCircleMinus onClick={decremenet}
              style={{
                fontSize: "40px",
              }}
            />
          </div>
          <div>
            <button
              style={{
                marginTop: "25px",
                border: "none",
                padding: "10px",
                backgroundColor: "rgb(185, 76, 76)",
                color: "#fff",
                borderRadius: "5px",
              }}
            >
              Add To Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
