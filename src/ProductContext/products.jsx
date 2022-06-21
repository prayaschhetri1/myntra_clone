import React, { useState } from 'react';
import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import product from './db.json'
export const ProductContext = createContext()

export const ProductContextProvider = ({children}) => {
    const [data,setData] = useState(product.prods)
    const [wishListData,setWishListData] = useState([])
    const [entered,setEntered] = useState(false)
    const [searched,setSearched] = useState("")

    const AddData = (item) => {
        setWishListData([...wishListData,item])
    }

    // console.log(wishListData)
  const handleSearch = (e) =>{
      if(e.key==='Enter'){
        setSearched(e.target.value)
        setEntered(true)
      }
      
  }

// Handle Remove feature

const handleRemove = (id) => {
    let afterRem = wishListData.filter(elem => {
      return elem.id !== id;
    })
    setWishListData(afterRem)
  }




    return (
        <ProductContext.Provider value={{searched,data,AddData,setData,wishListData,handleSearch,entered,handleRemove}}>
            {children}
        </ProductContext.Provider>
    )
}
