import React, { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../../ProductContext/products";
import styles from "./Body.module.css";
import SingleItem from "./SingleItem";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
const Body = () => {
  const { data, AddData } = useContext(ProductContext);
 
  const handleSortByPrice = (e) => {
    if (e.target.value === "htl") {
      let shortedhighData = data.sort((a, b) => {
        return b.price - a.price;
      });
      AddData([...shortedhighData]);
    }
    if (e.target.value === "lth") {
      let shortedLowData = data.sort((a, b) => {
        return a.price - b.price;
      });
      AddData([...shortedLowData]);
    }
  };

 
  return (
    <div className={styles.mainDiv}>
      <div className={styles.selected}>
      <InputLabel id="demo-simple-select-label">Sort by price</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    label="Sort"

    onChange={handleSortByPrice}
  >
    
    <MenuItem value="htl">High to Low</MenuItem>
    <MenuItem value="lth">Low to High</MenuItem>
   
  </Select>
      </div>
     

      <div className={styles.products_list}>
        {data.map((item) => {
          return (
                <SingleItem key={item.id} item={item}/>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
