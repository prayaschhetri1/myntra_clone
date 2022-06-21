import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { ProductContext } from '../../ProductContext/products'

const SearchReq = () => {
    const {data,searched} = useContext(ProductContext)
    
        if(searched){
            return <Navigate to="/search"/>
        }
    
}

export default SearchReq