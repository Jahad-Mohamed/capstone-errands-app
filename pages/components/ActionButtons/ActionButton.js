import React from "react";
import styles from "../../../styles/Home.module.css";
import Link from "next/link";

const ActionButton = () => {
  return (
    <div className={styles.actionButton__container}>
      <Link href="./search">
        <div className={styles.actionButtons}>
          <img
            src="https://i.ibb.co/n776JLm/bike.png"
            alt=""
            className={styles.actionButtonsImage}
          />
          Errand
        </div>
      </Link>
      {/* <Link> */}
      <div className={styles.actionButtons}>
        <img
          src="https://i.ibb.co/cyvcpfF/uberx.png"
          alt=""
          className={styles.actionButtonsImage}
        />
        Ride
      </div>
      {/* </Link> */}
      {/* <Link> */}{" "}
      <div className={styles.actionButtons}>
        <img
          src="https://i.ibb.co/5RjchBg/uberschedule.png"
          alt=""
          className={styles.actionButtonsImage}
        />
        reservce
      </div>
      {/* </Link> */}
    </div>
  );
};

export default ActionButton;
