import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

const search = () => {
  const [pickup, setPickUp] = useState("");
  const [dropoff, setDropOff] = useState("");

  const [size, setSize] = useState("");
  const [weight, setweight] = useState("");
  const [value, setvalue] = useState("");

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
      <div className={styles.search__parcelContainer}>
        <h1 className={styles.search__title}>Parcels</h1>
        <h3 className={styles.search__title}>Enter the size</h3>
        <div className={styles.actionButton__container}>
          <div
            className={`${styles.actionButtons} ${
              size == 1 ? styles.active_size : ""
            }`}
            onClick={() => {
              setSize(1);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsSmall}
            />
            Small
          </div>
          <div
            className={`${styles.actionButtons} ${
              size == 2 ? styles.active_size : ""
            }`}
            onClick={() => {
              setSize(2);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsMedium}
            />
            Medium
          </div>
          <div
            className={`${styles.actionButtons} ${
              size == 3 ? styles.active_size : ""
            }`}
            onClick={() => {
              setSize(3);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsLarge}
            />
            Large
          </div>
        </div>
        <h3 className={styles.search__title}>Enter the weight</h3>
        <div className={styles.actionButton__container}>
          <div
            className={`${styles.actionButtons} ${
              weight == 1 ? styles.active_weight : ""
            }`}
            onClick={() => {
              setweight(1);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsImage}
            />
            Under 5kg
          </div>
          <div
            className={`${styles.actionButtons} ${
              weight == 2 ? styles.active_weight : ""
            }`}
            onClick={() => {
              setweight(2);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsImage}
            />
            Under 10kg
          </div>
          <div
            className={`${styles.actionButtons} ${
              weight == 3 ? styles.active_weight : ""
            }`}
            onClick={() => {
              setweight(3);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsImage}
            />
            Under 20kg
          </div>
        </div>
        <h3 className={styles.search__title}>Enter the value</h3>
        <div className={styles.actionButton__container}>
          <div
            className={`${styles.actionButtons} ${
              value == 1 ? styles.active_value : ""
            }`}
            onClick={() => {
              setvalue(1);
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
              alt=""
              className={styles.actionButtonsImage}
            />
            Small
          </div>
        </div>
      </div>

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
            placeholder="Pickup"
            className={styles.search__input}
            value={pickup}
            onChange={(e) => setPickUp(e.target.value)}
          />
          <input
            placeholder="Dropoff"
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
      {value && size && weight && pickup && dropoff ? (
        <Link
          href={{
            pathname: "/confirm",
            query: {
              pickup: pickup,
              dropoff: dropoff,
            },
          }}
        >
          <div className={styles.search__confirmLocation}>
            {" "}
            Confirm Location
          </div>
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};

export default search;

/*
 */
