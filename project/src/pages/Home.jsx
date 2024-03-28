import React, { useEffect } from 'react'
import { useState } from 'react';

const Home = () => {
 const [products, setProducts] = useState([]);

async function fetchProducts(){
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  console.log(data)
  setProducts(data)
}

 useEffect(() => {
  try {
    fetchProducts()
  } catch (error) {
    console.log(error)
  }
  

 },[])

  return (
    <div>
      {products.map((item) => (
        <div>{item.title}</div>
      ))}
    </div>
  )
}

export default Home