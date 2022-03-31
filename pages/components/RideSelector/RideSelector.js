import React, { useEffect, useState } from "react";
import { vehicleList } from "../../data/VehicleList";
import styles from "../../../styles/Home.module.css";

const RideSelector = (pickUpCoordinates, dropOffCoordinates) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickUpCoordinates[0]},${pickUpCoordinates[1]};${dropOffCoordinates[0]},${dropOffCoordinates[1]}?access_token="pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ"`
    ).then((response) =>
      response.json().then((data) => {
        setRideDuration(data.routes[0].duration / 100);
      })
    );
  }, [pickUpCoordinates, dropOffCoordinates]);

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
            <div className={styles.rideSelector__price}>
              {"£" + (rideDuration * car.multiplier).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.search__resultConfirm}> Confirm Journey</div>
    </div>
  );
};

export default RideSelector;
