import React from "react";
import styles from "../styles/Home.module.css";
import Vehicle from "../public/electric-car.png";

const howitworks = () => {
  return (
    <div className={styles.howItWorks__pageContainer}>
      <div className={styles.howItWorks__container}>
        <h1>How It Works</h1>
        <div className={styles.howItWorks__step}>
          <div className={styles.howItWorks__text}>
            Pick the type of errand
            <div className={styles.howItWorks__para}>
              Select your errand from our list of available services
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png"
            alt=""
            className={styles.howItWorks__image}
          />
        </div>
        <div className={styles.howItWorks__step}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png"
            alt=""
            className={styles.howItWorks__image}
          />
          <div className={styles.howItWorks__text}>
            Provide more information about your errand
            <div className={styles.howItWorks__para}>
              Fill in the form specific to your errand request. Tell us what you
              need, when, where and what works for you.
            </div>
          </div>
        </div>
        <div className={styles.howItWorks__step}>
          <div className={styles.howItWorks__text}>
            Select a suitable mode of transport for your errand
            <div className={styles.howItWorks__para}>
              {" "}
              Choose one of electric transportation methods. Scooter are
              suitable for light, short distance errands, Bike works well with
              light medium size errands, and vans can handle pretty much any
              errand.{" "}
            </div>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4472/4472515.png"
            alt=""
            className={styles.howItWorks__image}
          />
        </div>
        <div className={styles.howItWorks__step}>
          <img src={Vehicle} className={styles.howItWorks__image} />
          <div className={styles.howItWorks__text}>
            Recieve your order confirmation and driver to arrive.
            <div className={styles.howItWorks__para}>
              This is the final stage before your errand begin, wait for the
              driver to arrive or contact your rider if you have any questions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default howitworks;
