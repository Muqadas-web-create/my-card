import { useState, useEffect } from 'react'
import './App.css'
import ProductCart from './components/ProductCart'
import axios from "axios";

function App() {
  const [data,setData] = useState(null)
  const getProducts = async()=>{
    try{
      const products = await axios.get("https://fakestoreapi.com/products")
      const res=products.data;
      console.log(res);
      setData(res);
    } catch(error){
      console.log("no data",error);
    }
  }

useEffect(()=>{
getProducts();
},[]);


  return (
    <>
    <div>
      {
        data?.map((currElem)=>{
          return <ProductCart data={currElem} />
        })
      }
    </div>
    </>
  )
}

export default App
