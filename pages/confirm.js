import React from "react";
import styles from "../styles/Home.module.css";
import Map from "../pages/components/Map/Map";
import RideSelector from "../pages/components/RideSelector/RideSelector";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const Confirm = () => {
  const router = useRouter();

  const [pickUpCoordinates, setPickUpCoordinates] = useState([0, 0]);
  const [dropOffCoordinates, setDropOffCoordinates] = useState([0, 0]);

  // const getPickUpCoordinates = (pickup) => {
  //   console.log(pickup);
  //   // fetch(
  //   //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
  //     new URLSearchParams({
  //       access_token:
  //         "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ",
  //       limit: 1,
  //     })
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setPickUpCoordinates(data.features[0].center);
  //   });
  // };

  // const getDropOffCoordinates = (dropoff) => {
  //   console.log(dropoff);
  // fetch(
  //   `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
  //     new URLSearchParams({
  //       access_token:
  //         "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ",
  //       limit: 1,
  //     })
  // )
  //   .then((response) => response.json())
  //   .then((data) => {
  //     setDropOffCoordinates(data.features[0].center);
  //   });
  // };

  useEffect(() => {
    const { pickup, dropoff } = router.query;
    console.log("Pickup", pickup);
    console.log("Dropoff", dropoff);
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
        setPickUpCoordinates(data.features[0].center);
      });

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
        setDropOffCoordinates(data.features[0].center);
      });
  }, []);
  console.log(pickUpCoordinates);
  console.log(dropOffCoordinates);

  return (
    <div className={styles.search__container}>
      <div className={styles.search__backButtonContainer}>
        <Head>
          <link
            href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css"
            rel="stylesheet"
          />
        </Head>
        <Link href="/search">
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back Button"
            className={styles.search__backButton}
          />
        </Link>
      </div>
      <Map
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
      <RideSelector
        pickUpCoordinates={pickUpCoordinates}
        dropOffCoordinates={dropOffCoordinates}
      />
    </div>
  );
};

export default Confirm;
