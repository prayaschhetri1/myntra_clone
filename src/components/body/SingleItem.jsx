import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../../ProductContext/products";
import styles from "./Body.module.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SingleItem = ({ item }) => {
  const { data, AddData } = useContext(ProductContext);

  const [count, setCount] = useState(0);
  const handleWishlist = (item) => {
    AddData(item);
    setCount(count + 1);
  };
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
            <Button variant="contained" size="300px" color="success">
              -
            </Button>

            <Button  variant="contained" size="small" color="success" onClick={()=>setCount(0)}>
          x
        </Button>
          </div>
         
        )}
      </CardActions>
    </Card>
  );
};

export default SingleItem;
