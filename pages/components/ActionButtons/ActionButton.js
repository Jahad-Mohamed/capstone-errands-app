import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const ActionButton = () => {
  return (
    <>
      <h1 className={styles.actionButton__title}>
        Start by choosing the errand you would like ...
      </h1>
      <div className={styles.actionButton__container}>
        <Link href="./search">
          <div className={styles.actionButtons}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/3724/3724788.png"
              alt=""
              className={styles.actionButtonsImage}
            />
            Groceries
          </div>
        </Link>
        <Link href="./search">
          <div className={styles.actionButtons}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2312/2312939.png"
              alt=""
              className={styles.actionButtonsImage}
            />
            Parcels
          </div>
        </Link>
        <div className={styles.actionButtons}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/741/741407.png"
            alt=""
            className={styles.actionButtonsImage}
          />
          Rides
        </div>
        {/* </Link> */}
        {/* <Link> */}{" "}
        <div className={styles.actionButtons}>
          <img
            src="https://cdn.dribbble.com/users/77598/screenshots/7958090/media/9dfda44bd1e8b288602cd465655e7a36.png"
            alt=""
            className={styles.actionButtonsImage}
          />
          Misscellaneous
        </div>
        {/* </Link> */}
      </div>
    </>
  );
};

export default ActionButton;
