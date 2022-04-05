import React from "react";
import styles from "../styles/Home.module.css";
import Vehicle from "../public/electric-car.png";

const howitworks = () => {
  return (
    <div className={styles.howItWorks__pageContainer}>
      <div className={styles.howItWorks__container}>
        <h1 className={styles.howItWorks__title}>How It Works</h1>

        <div className={styles.howItWorks__step}>
          <div className={styles.howItWorks__text}>
            Pick the type of errand
            <div className={styles.howItWorks__para}>
              Select your errand from our list of available services
            </div>
          </div>
          <img
            src="https://cdn-icons.flaticon.com/png/512/3295/premium/3295442.png?token=exp=1649187178~hmac=58b6eb5c5d5574fa46e8770e99877993"
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
            Select a suitable mode of transport
            <div className={styles.howItWorks__para}>
              {" "}
              Choose one of electric transportation methods. Scooter are
              suitable for light, short distance errands, Bike works well with
              light medium size errands, and vans can handle pretty much any
              errand.{" "}
            </div>
          </div>
          <img
            src="https://cdn-icons.flaticon.com/png/512/4277/premium/4277309.png?token=exp=1649187781~hmac=94ea6f344dd1f8bb5776951b3b735c9b"
            alt=""
            className={styles.howItWorks__image}
          />
        </div>

        <div className={styles.howItWorks__step}>
          <img
            src="https://cdn-icons.flaticon.com/png/512/1292/premium/1292906.png?token=exp=1649187292~hmac=4f54f8fb5f95ff26da6ed5d4598121f8"
            className={styles.howItWorks__image}
          />
          <div className={styles.howItWorks__text}>
            Recieve your order confirmation
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
