import React from "react";
import styles from "../../../styles/Home.module.css";

const Header = () => {
  return (
    <>
      <div className={styles.Header__container}>
        <div className={styles.Header__logo}>LOGO HERE</div>
        <div className={styles.Header__profile}>
          <div className={styles.Header__profileName}>
            {" "}
            Jay <br /> Banks
          </div>
          <img
            src="https://ca.slack-edge.com/T01QHN8FXP1-U02ULQR7K0R-795d487a01fc-192"
            alt="Profile Image"
            className={styles.Header__profileImage}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
