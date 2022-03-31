import React from "react";
import { vehicleList } from "../../data/VehicleList";
import styles from "../../../styles/Home.module.css";

const RideSelector = () => {
  return (
    <div className={styles.rideSelector__section}>
      <div className={styles.rideSelector__title}>
        Choose a ride, or swipe up for more
      </div>

      <div className={styles.rideSelector__vehiclesContainer}>
        {vehicleList.map((car, index) => (
          <div className={styles.rideSelector__vehicles} key={index}>
            <img
              src={car.imgUrl}
              className={styles.rideSelector__vehicleImage}
            />
            <div className={styles.rideSelector__carDetails}>
              <div className={styles.rideSelector__service}>{car.service}</div>
              <div className={styles.rideSelector__time}>5 min away</div>
            </div>
            <div className={styles.rideSelector__price}>£4.00</div>
          </div>
        ))}
      </div>
      <div className={styles.search__resultConfirm}> Confirm Journey</div>
    </div>
  );
};

export default RideSelector;
