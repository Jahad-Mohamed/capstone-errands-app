import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const search = () => {
  const [pickup, setPickUp] = useState("");
  const [dropoff, setDropOff] = useState("");

  console.log(pickup);
  console.log(dropoff);

  return (
    <div className={styles.search__container}>
      <Link href="/">
        <div className={styles.search__backButton}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back Button"
          />
        </div>
      </Link>
      <div className={styles.search__inputContainer}>
        <div className={styles.search__inputFrom}>
          <img
            src="https://img.icons8.com/ios-filled/50/9CA3AF/filled-circle.png"
            alt=""
            className={styles.search__iconCircle}
          />

          <img
            src="https://img.icons8.com/ios/50/9CA3AF/vertical-line.png"
            alt=""
            className={styles.search__iconLine}
          />

          <img
            src="https://img.icons8.com/windows/50/000000/square-full.png"
            alt=""
            className={styles.search__iconSquare}
          />
        </div>
        <div className={styles.search__inputBox}>
          <input
            placeholder="Enter pickup location"
            className={styles.search__input}
            value={pickup}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <input
            placeholder="Enter dropoff location"
            className={styles.search__input}
            value={dropoff}
            onChange={(e) => setDropOff(e.target.value)}
          />
        </div>
        <div className={styles.search__plus}>
          <img
            src="https://img.icons8.com/ios/50/000000/plus-math.png"
            alt=""
          />
        </div>
      </div>

      <div className={styles.search__savedPlaces}>
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          alt="Star Icon"
          className={styles.search__star}
        />
        Saved Places
      </div>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <div className={styles.search__confirmLocation}> Confirm Location</div>
      </Link>
    </div>
  );
};

export default search;

/*
 */
