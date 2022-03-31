import React from "react";
import styles from "../styles/Home.module.css";
import Map from "../pages/components/Map/Map";
import RideSelector from "../pages/components/RideSelector/RideSelector";
import { useEffect } from "react";

const Confirm = () => {
  const getPickUpCoordinates = () => {
    const pickup = "Archway";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("pickup");
        console.log(data.features[0].center);
      });
  };

  const getDropOffCoordinates = () => {
    const dropoff = "shoreditch";
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ",
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("pickoff");
        console.log(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickUpCoordinates();
    getDropOffCoordinates();
  }, []);

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

export default Confirm;
