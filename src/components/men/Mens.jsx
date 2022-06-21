import React from "react";
import Body from "../body/Body";
import Filter from "../body/Filter";
import styles from "./Mens.module.css";
const Mens = () => {
  return (
    <div className={styles.mainBody}>
      {/* Main wrapper */}
      <div className={styles.home_pannelBody_wrapper}>
        {/* side pannel wrapper */}
        <div className={styles.home_pannel_wrap}>
          <Filter />
        </div>
        {/* Body Wrapper */}
        <div className={styles.home_body_wrap}>
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Mens;
