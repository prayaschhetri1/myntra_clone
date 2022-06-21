import { Button, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../../ProductContext/products";
import Home from "../home/Home";
import styles from "./Bag.module.css";
const Bag = () => {
  let navigate = useNavigate();
  const { wishListData, handleRemove } = useContext(ProductContext);
  const [total, setTotal] = useState(0);
  const [count, setCount] = useState(1);
  const [input, setInput] = useState("");
  const [discount, setDiscount] = useState(false);

  var totalprice = wishListData.reduce(function (acc, elem) {
    return acc + elem.price;
  }, 0);

  useEffect(() => {
    if (wishListData.length < 1) {
      return navigate("/empty");
    }
  });

  const handleCheckCoupon = () => {
    if (input === "prayash@50") {
      alert("You got ₹50 discount😍");
      setDiscount(true);
    }

    setInput("")
  };

const handleCheckoutPage = () => {
  navigate("/address")
}

  return (
    <>
      <h5>Apply copoun code : prayash@50 and get instant ₹40 discount</h5>
      <div className={styles.mainContainer}>
        <div className={styles.products_list}>
          <div className={styles.leftSide}>
            <p className={styles.totalItems}>
              TOTAL ITEMS : {wishListData.length}
            </p>
            <div className={styles.singleItemleftDiv}>
              {wishListData.map((item) => {
                return (
                  <div className={styles.singleLeftItem} key={item.id}>
                    <div key={item.id} className={styles.imageAndtitle}>
                      <div>
                        <img src={item.image} alt="product_image" />
                      </div>
                      <div>
                        <p className={styles.title}>{item.title}</p>
                        <p className={styles.categ}>{item.category}</p>
                        <p className={styles.price}>Rs. {item.price}</p>
                        <p className={styles.rating}>rating: {item.rating}</p>
                      </div>
                    </div>
                    <div>
                      <div>
                        <Tooltip title="delete">
                          <IconButton
                          
                            onClick={() => handleRemove(item.id)}
                            aria-label="delete"
                          >
                            <DeleteIcon style={{fontSize:'25px'}}  />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right side div */}

          <div className={styles.copounDiv}>
            <div>
              <h2>Apply Coupon Code</h2>
              <div className={styles.inputDIv}>
                <input value={input}
                  onChange={(e) =>{
                    setInput(e.target.value)
                    
                  } }
                  placeholder="Add copoun code here..."
                  type="text"
                />
                <Button
                  onClick={handleCheckCoupon}
                  variant="contained"
                  color="success"
                >
                  ADD
                </Button>

                
              </div>
              <div>
                <p>Product Amount :</p>
                <p>₹ {totalprice}</p>
              </div>
              <div>
                <p>Shipping charge :</p>
                <p>₹ 50</p>
              </div>
              <div>
                <p>Estimated amount :</p>
                <p>₹ {totalprice + 50}</p>
              </div>
              {discount === false ? (
                <div>
                  <p>Actual amount :</p>
                  <p>₹ {totalprice + 50}</p>
                </div>
              ) : (
                <div>
                  <p>Actual amount :</p>
                  <p>₹ {totalprice}</p>
                </div>
              )}
              <div>
                 <Button onClick={handleCheckoutPage} variant="contained">Checkout</Button>
                </div>
            </div>
          </div>
        </div>
        <div className={styles.rightSide}>
          {discount === false ? (
            <h2 style={{ textAlign: "center", margin: "auto" }}>
              Total :{" "}
              <span style={{ marginLeft: "20px" }}>₹ {totalprice + 50}</span>{" "}
            </h2>
          ) : (
            <h2 style={{ textAlign: "center", margin: "auto" }}>
              Total : <span style={{ marginLeft: "20px" }}>₹ {totalprice}</span>{" "}
            </h2>
          )}

          <br />
          <Button sx={{ width: 140 }} variant="contained">
            BUY NOW
          </Button>
        </div>
      </div>
    </>
  );
};

export default Bag;
