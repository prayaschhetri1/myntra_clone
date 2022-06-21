import { Button } from '@mui/material';
import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../../ProductContext/products';

const Empty = () => {
    const { wishListData,handleRemove} = useContext(ProductContext);
    let navigate = useNavigate()
    if(wishListData.length>0){
        return navigate("/bag")
    }
    const handleClick = () => {
      return navigate("/men")
    }
  return (
    <div  style={{display:"flex",flexDirection:"column", margin:"auto",justifyContent:"center",alignItems:"center"}}>
      <p style={{fontSize:"33px",fontWeight:"700",color:"teal"}}>YOUR CART IS EMPTY ☹</p>
        <div style={{display:"flex",margin:"auto",justifyContent:"center"}}>
          <img width="600" src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-2506.jpg?t=st=1655804193~exp=1655804793~hmac=a2ee60811649b0b2a67a5fb8438f27c0204534d05867745c9550cfefc9882fd1&w=996" alt="" />
         
        </div>
        <Button onClick={handleClick} sx={{ width: 310 }} color="success" style={{fontSize:"20px"}} variant="contained">ADD SOMETHING IN CART</Button>
    </div>
  )
}

export default Empty