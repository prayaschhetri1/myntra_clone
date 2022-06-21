import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ProductContext } from '../../ProductContext/products'
import Home from '../home/Home'
import SingleItem from './SingleSearch'
import styles from './WishList.module.css'
const WishList = () => {
  const {data,searched,entered,AddData} = useContext(ProductContext)
  const [filteredData,setFilteredData] = useState(data)
  
  const [count, setCount] = useState(0);
  const handleWishlist = (item) => {
    AddData(item);
    setCount(count + 1);
  };
    
if(!entered){
  return <Home/>
}

const handleMinusList = (id) => {
  setCount(count - 1);
  let newItem = data.filter(item => {
    return item.id !== id;
  })
  AddData(newItem)
}

  return (
    <div className={styles.products_list}>
    {filteredData.filter((item) => {

        if (searched === "") {
          return item;
        } else if (
          item.category.toLowerCase().includes(searched.toLowerCase())
        ) {
          return item;
        }
        
      })


     .map((item) => {
          return <SingleItem item={item} key={item.id} />
      })
    }
  </div>
  )
}


export default WishList