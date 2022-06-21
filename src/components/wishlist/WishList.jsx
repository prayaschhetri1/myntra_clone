import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ProductContext } from '../../ProductContext/products'
import Home from '../home/Home'
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
      console.log(searched)
        if (searched === "") {
          return item;
        } else if (
          item.category.toLowerCase().includes(searched.toLowerCase())
        ) {
          return item;
        }
        
      })


     .map((item) => {
          return (
            <Card sx={{ maxWidth: 599 }}>
            <CardMedia
              component="img"
              height="230"
              image={item.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {item.category}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.price}
              </Typography>
              <Typography variant="body1" color="error">
                {item.rating}
              </Typography>
            </CardContent>
            <CardActions>
              {count === 0 ? (
                <Button
                  onClick={() => handleWishlist(item)}
                  variant="contained"
                  size="large"
                  color="error"
                >
                  ADD TO BAG
                </Button>
              ) : (
                <div className={styles.countbtn}>
                  <Button
                    onClick={() => handleWishlist(item)}
                    variant="contained"
                    size="300px"
                    color="success"
                  >
                    +
                  </Button>
                  <span>{count}</span>
                  <Button variant="contained" size="300px" color="success" onClick={()=>handleMinusList(item.id)}>
                    -
                  </Button>
                </div>
              )}
            </CardActions>
          </Card>
          )
      })
    }
  </div>
  )
}


export default WishList