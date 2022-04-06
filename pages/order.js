import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "../firebase";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Header from "./components/Header/Header";

export default function order() {
  const db = getFirestore(firebaseApp);
  const [orderData, setOrderData] = useState();

  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));
    querySnapshot.forEach((doc) => {
      if (doc.id == localStorage.getItem("orderID")) {
        setOrderData(doc.data());
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.Container}>
        {orderData ? "" : <div className={styles.loader}></div>}

        <div className={styles.center_div}>
          <h2>Order Detail</h2>

          {orderData ? (
            <>
              <div>
                {" "}
                <h3>Email</h3>
                <h3> {orderData.email}</h3>
              </div>
              <div>
                {" "}
                <h3>Vehicle</h3>
                <h3> {orderData.vehicle.service}</h3>
              </div>

              <div>
                {" "}
                <h3>Size</h3>
                <h3> {orderData.size}</h3>
              </div>

              <div>
                {" "}
                <h3>Weight</h3>
                <h3> {orderData.weight}</h3>
              </div>

              <div>
                {" "}
                <h3>Journey Price</h3>
                <h3>&#163; {orderData.price}</h3>
              </div>
              <div>
                {" "}
                <h3>Additional Information</h3>
                <h3> {orderData.info}</h3>
              </div>
            </>
          ) : (
            ""
          )}

          <div className={styles.homeIcon}></div>
        </div>
        <Link href="/">
          <div className={styles.search__backButton}>Return to Home</div>
        </Link>
      </div>
    </>
  );
}
