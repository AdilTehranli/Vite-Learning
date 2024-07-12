import React from 'react'
import event, {useState} from 'react'
import "./../css/Currency.css"
import { FaArrowCircleRight } from "react-icons/fa";
import axios from 'axios'

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest"
let API_KEY = "fca_live_rrVjLTDF2Cx3hMTE3HMQVCUCn31aUgZwc0D6829H"
let EXCHANGE_API = ""
const Currency = () => {
  const [amount,setAmount]=useState(0);
  const [fromCurrency,setFromCurrency] = useState('USD');
  const [toCurrency,setToCurrency] = useState('TRY');
  const [result,setResult] = useState(0);
  

  const exchange =  async () =>{
   const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`)
   const result = (response.data.data[toCurrency] * amount).toFixed(2)
    setResult(result)
  }

  
  return (
    <>
      <div className="currency-div">
        <input
        value = {amount}
        onChange = {(e)=> setAmount(e.target.value)}
        type="number" className="amount" />
        <select  onChange={(e)=>setFromCurrency(e.target.value)} className="from-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        <FaArrowCircleRight style={{fontSize: "25px"}} />
        <select onChange={(e)=> setToCurrency(e.target.value)} className="to-currency-option">
          <option>USD</option>
          <option>EUR</option>
          <option>TRY</option>
        </select>
        
        <input type="number" value={result} onChange={(e)=> setResult(e.target.value)} className="result" />
       <button onClick={exchange}>Change</button>
      </div>
    </>
    
  );
};


export default Currency;
