import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const ActionButton = () => {
  return (
    <div className={styles.actionButton__container}>
      <Link href="./search">
        <div className={styles.actionButtons}>
          <img
            src="https://i.ibb.co/mb3Ypq3/Output-onlinepngtools-1.png"
            alt=""
            className={styles.actionButtonsImage}
          />
          Groceries
        </div>
      </Link>
      <Link href="./search">
        <div className={styles.actionButtons}>
          <img
            src="https://i.ibb.co/n776JLm/bike.png"
            alt=""
            className={styles.actionButtonsImage}
          />
          Parcels
        </div>
      </Link>
      <div className={styles.actionButtons}>
        <img
          src="https://i.ibb.co/cyvcpfF/uberx.png"
          alt=""
          className={styles.actionButtonsImage}
        />
        Rides
      </div>
      {/* </Link> */}
      {/* <Link> */}{" "}
      <div className={styles.actionButtons}>
        <img
          src="https://i.ibb.co/5RjchBg/uberschedule.png"
          alt=""
          className={styles.actionButtonsImage}
        />
        Misscellaneous
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ActionButton;
