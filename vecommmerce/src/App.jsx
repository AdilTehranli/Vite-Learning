import { useState,useEffect } from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";
import Drawer from '@mui/material/Drawer';
import { useSelector,useDispatch } from 'react-redux';
import { calculateAmountBasket, setDrawer } from "./redux/slices/BasketSlice";

function App() {
  const { products, drawer,totalAmount } = useSelector((state) => state.basket);

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(calculateAmountBasket())
  },[])
  return (
    <>
      <PageContainer>
        <Loading />
        <Header />
        <RouterConfig />
        <Drawer anchor='right' onClose={()=>dispatch(setDrawer())} open={drawer}>
          {
            products && products.map((product) => (
              <div className='flex-row' style={{ padding: '20px' }}>
                <img style={{ marginRight: '5px' }} src={product.image} width={50} height={50} />
                <p style={{ width: '320px', marginRight: '5px' }}>{product.title}({product.count})</p>
                <p style={{ fontWeight: 'bold', marginRight: '10px', width: '60px' }}>{product.price}$</p>
                <button style={{ padding: '5px', borderRadius: '5px', backgroundColor: 'rgb(185, 76, 76)', border: 'none', color: '#fff', width: '50px' }}>sil</button>
              </div>
         
            ))
          }
        <div>
                <h2 >Total: {totalAmount}$</h2>
              </div>
        </Drawer>
      </PageContainer>
    </>
  );
}

export default App;
