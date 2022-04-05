import React, { useEffect, useState } from "react";
import { vehicleList } from "../../../data/VehicleList";
import styles from "../../../styles/Home.module.css";
import firebaseApp from "../../../firebase";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { onAuthStateChanged, GoogleAuthProvider, getAuth } from "firebase/auth";

const sizeList = ["small", "medium", "large"];
const weightList = ["< 5KG", "< 10KG", "< 15KG"];
const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);
  const [rideDistance, setRideDistance] = useState(0);
  const [price, setPrice] = useState(0);
  const [ride, setRide] = useState();
  const [User, setUser] = useState();
  const db = getFirestore(firebaseApp);

  const router = useRouter();

  const auth = getAuth(firebaseApp);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const handleConfirm = async () => {
    const vehicle = vehicleList[ride - 1];

    const size = sizeList[props.size - 1];
    const weight = weightList[props.weight - 1];
    const value = props.value;

    try {
      const docRef = await addDoc(collection(db, "orders"), {
        size,
        weight,
        value,
        vehicle,
        email: User.email,
        duration: rideDuration,
        distance: rideDistance.toFixed(2),
        price: price,
        name: User.displayName,
      });
      console.log("Document written with ID: ", docRef.id);
      localStorage.setItem("orderID", docRef.id);
      router.push("/order");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  useEffect(() => {
    fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickUpCoordinates[0]},${props.pickUpCoordinates[1]};${props.dropOffCoordinates[0]},${props.dropOffCoordinates[1]}?access_token=pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ`
    ).then((response) =>
      response.json().then((data) => {
        console.log(data);
        if (data.code === "Ok") {
          setRideDuration(data.routes[0].duration / 100);
          setRideDistance(data.routes[0].distance / 1000);
        }
      })
    );
  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  return (
    <div className={styles.rideSelector__section}>
      <div className={styles.rideSelector__title}>
        Choose a ride, or swipe up for more
      </div>

      <div className={styles.rideSelector__vehiclesContainer}>
        {vehicleList.map((car, index) => (
          <div
            className={`${styles.rideSelector__vehicles} ${
              ride - 1 == index ? styles.active_ride : ""
            }`}
            onClick={() => {
              setRide(index + 1);
              setPrice((5 * car.multiplier).toFixed(2));
            }}
            key={index}
          >
            <img
              src={car.imgUrl}
              className={styles.rideSelector__vehicleImage}
            />
            <div className={styles.rideSelector__carDetails}>
              <div className={styles.rideSelector__service}>{car.service}</div>
              <div className={styles.rideSelector__time}>
                Your ride is {Math.floor(Math.random(15) * 10 + 4)} min away
              </div>
            </div>
            <div>
              {" "}
              You errand will take{" "}
              {Math.floor((rideDistance * 4) / car.multiplier)} mins tocomplete
            </div>

            <div className={styles.rideSelector__price}>
              {"£" + (car.multiplier * 5).toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      {ride ? (
        <div className={styles.search__resultConfirm} onClick={handleConfirm}>
          {" "}
          Confirm Journey
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RideSelector;
