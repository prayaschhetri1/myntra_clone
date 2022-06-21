import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../../ProductContext/products";
import styles from "./Navbar.module.css";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const { wishListData, handleSearch } = useContext(ProductContext);
  let size = wishListData.length;
  return (
    <div className={`${styles.container}`}>
      <div className={styles.top_banner}>
        <div className={styles.marquee}>
          <p>
            <span>
              Apply copon code: gh5678 to get instant 45% extra discount to your
              favorite wear.
            </span>
          </p>
          <p>
            <span>
              &nbsp; So hurry up and grab your best deal. Deal will end after 2
              hours.
            </span>
          </p>
        </div>
      </div>
      <div className={styles.navbar}>
        <div>
          <div className={styles.logo_div}>
            <a href="/">
              <img
                src={process.env.PUBLIC_URL + "/myntra.png"}
                width="65"
                height="44"
                alt="logo"
              />
            </a>
          </div>
          <div>
            <ul>
              <NavLink to="men" className={styles.text}>
                {" "}
                <li>Men</li>{" "}
              </NavLink>
              <NavLink to="women" className={styles.text}>
                {" "}
                <li>Women</li>{" "}
              </NavLink>
              <NavLink to="Kids" className={styles.text}>
                {" "}
                <li>Kids</li>{" "}
              </NavLink>
              <NavLink to="living" className={styles.text}>
                {" "}
                <li>Home & Living</li>{" "}
              </NavLink>
              <NavLink to="studio" className={styles.text}>
                <li>Studio</li>{" "}
              </NavLink>
              <NavLink to="search">
                <input
                  type="text"
                  className={styles.inputbox}
                  placeholder="Search for products, brands and more"
                  onKeyDown={handleSearch}
                />
              </NavLink>

              <NavLink
                to="profile"
                className={`${styles.text} ${styles.smalltext}`}
              >
                <img
                  width="17px"
                  height="17px"
                  src={process.env.PUBLIC_URL + "/profile.png"}
                  alt=""
                />{" "}
                <li>Profile</li>{" "}
              </NavLink>
              {/* <NavLink to="wishlist" className={`${styles.text} ${styles.smalltext}`}>
                <img
                  width="17px"
                  height="17px"
                  src={process.env.PUBLIC_URL + "/wishlist.png"}
                  alt=""
                />{" "}
                <li>Wishlist</li>{" "}
              </NavLink> */}
              <NavLink
                to="bag"
                className={`${styles.text} ${styles.smalltext}`}
              >
                <Badge badgeContent={size} color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
                <li>Bag</li>{" "}
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
