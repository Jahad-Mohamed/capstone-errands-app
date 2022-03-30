import React from "react";
import styles from "../styles/Home.module.css";
import Map from "../pages/components/Map/Map";
import RideSelector from "../pages/components/RideSelector/RideSelector";
const confirm = () => {
  return (
    <div className={styles.search__container}>
      <Map />
      <div className={styles.search__resultContainer}>
        <RideSelector />
        <div className={styles.search__resultConfirm}> Confirm Journey</div>
      </div>
    </div>
  );
};

export default confirm;
