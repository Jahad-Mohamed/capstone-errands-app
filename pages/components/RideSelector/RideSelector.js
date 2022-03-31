import React from "react";
import { vehicleList } from "../../data/VehicleList";
import styles from "../../../styles/Home.module.css";

const RideSelector = () => {
  return (
    <div>
      <div>Choose a ride, or swipe up for more</div>

      <div className={styles.rideSelector__vehiclesContainer}>
        {vehicleList.map((car, index) => (
          <div key={index}>
            <img src={car.imgUrl} />
            <div className={styles.rideSelector__carDetails}>
              <div className={styles.rideSelector__div}>{car.service}</div>
              <div className={styles.rideSelector__time}>5 min away</div>
            </div>
            <div className={styles.rideSelector__price}>£4.00</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RideSelector;
