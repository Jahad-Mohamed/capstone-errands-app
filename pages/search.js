import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";
import Header from "./components/Header/Header";

const search = () => {
  const [pickup, setPickUp] = useState("");
  const [dropoff, setDropOff] = useState("");
  const [screen, setScreen] = useState(1);

  const [size, setSize] = useState("");
  const [weight, setweight] = useState("");
  const [value, setvalue] = useState("");

  const changeModal = async () => {
    setScreen(screen + 1);
  };
  const handelChange = async (e) => {
    setvalue(e.target.value);
  };
  return (
    <>
      <Header />

      <div className={styles.search__container}>
        <div className={styles.modal}>
          <div className={styles.modal_indicators}>
            <span className={screen > 0 ? styles.active_span : ""}>1</span>
            <span className={screen > 1 ? styles.active_span : ""}>1</span>
            <span className={screen > 2 ? styles.active_span : ""}>1</span>
            <span className={screen > 3 ? styles.active_span : ""}>1</span>
          </div>
          {/* <Link href="/">
        <div className={styles.search__backButton}>
          <img
            src="https://img.icons8.com/ios-filled/50/000000/left.png"
            alt="Back Button"
          />
        </div>
      </Link> */}
          {screen == 1 ? (
            <div className={styles.search__parcelContainer}>
              <h2 className={styles.search__title}>Size of Parcels</h2>
              <div className={styles.actionButton__container}>
                <div
                  className={`${styles.actionButtons_search} ${
                    size == 1 ? styles.active_size : ""
                  }`}
                  onClick={() => {
                    setSize(1);
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
                    alt=""
                    className={styles.actionButtonsImage}
                  />
                  Small
                </div>
                <div
                  className={`${styles.actionButtons_search} ${
                    size == 2 ? styles.active_size : ""
                  }`}
                  onClick={() => {
                    setSize(2);
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
                    alt=""
                    className={styles.actionButtonsImage}
                  />
                  Medium
                </div>
                <div
                  className={`${styles.actionButtons_search} ${
                    size == 3 ? styles.active_size : ""
                  }`}
                  onClick={() => {
                    setSize(3);
                  }}
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/2312/2312894.png"
                    alt=""
                    className={styles.actionButtonsImage}
                  />
                  Large
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {screen == 2 ? (
            <div>
              <h2 className={styles.search__title}>Weight for parcel</h2>
              <div className={styles.actionButton__container}>
                <div
                  style={{ padding: "3rem 0", fontSize: "larger" }}
                  className={`${styles.actionButtons_search} ${
                    weight == 1 ? styles.active_weight : ""
                  }`}
                  onClick={() => {
                    setweight(1);
                  }}
                >
                  {/* <img src="" alt="" className={styles.actionButtonsImage} /> */}
                  &#60; 5kg
                </div>
                <div
                  style={{ padding: "3rem 0", fontSize: "larger" }}
                  className={`${styles.actionButtons_search} ${
                    weight == 2 ? styles.active_weight : ""
                  }`}
                  onClick={() => {
                    setweight(2);
                  }}
                >
                  {/* <img src="" alt="" className={styles.actionButtonsImage} /> */}
                  &#60; 10kg
                </div>
                <div
                  style={{ padding: "3rem 0", fontSize: "larger" }}
                  className={`${styles.actionButtons_search} ${
                    weight == 3 ? styles.active_weight : ""
                  }`}
                  onClick={() => {
                    setweight(3);
                  }}
                >
                  {/* <img src="" alt="" className={styles.actionButtonsImage} /> */}
                  &#60; 20kg
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          {screen == 3 ? (
            <div>
              <h2 className={styles.search__title}>Contents</h2>
              <div className={styles.value_container}>
                <div
                  className={`${styles.value_textField} `}
                  onClick={() => {
                    setvalue(1);
                  }}
                >
                  <span>&#163;</span>
                  <input
                    type="number"
                    value={value}
                    onChange={handelChange}
                    placeholder=" Value ..."
                  />
                </div>
                <div
                  className={`${styles.info_textField} `}
                  onClick={() => {
                    setvalue(1);
                  }}
                >
                  <input type="text" placeholder=" Additional information" />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {screen == 4 ? (
            <div>
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
                {/* <div className={styles.search__plus}>
          <img
            src="https://img.icons8.com/ios/50/000000/plus-math.png"
            alt=""
          />
        </div> */}
              </div>

              {/* <div className={styles.search__savedPlaces}>
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png"
          alt="Star Icon"
          className={styles.search__star}
        />
        Saved Places
      </div> */}
            </div>
          ) : (
            ""
          )}

          {screen < 4 ? (
            <div className={styles.confirm_btn}>
              <button onClick={changeModal}>Confirm</button>
            </div>
          ) : value > 0 && value && size && weight && pickup && dropoff ? (
            <Link
              href={{
                pathname: "/confirm",
                query: {
                  pickup: pickup,
                  dropoff: dropoff,
                  value,
                  weight,
                  size,
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
      </div>
    </>
  );
};

export default search;

/*
 */
