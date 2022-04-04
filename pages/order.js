import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from "../firebase";
import { useEffect, useState } from "react";

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
    <div>
      {orderData ? (
        <>
          <h3>email: {orderData.email}</h3>
          <h3>vehicle: {orderData.vehicle.service}</h3>
          <h3>size: {orderData.size}</h3>
          <h3>weight: {orderData.weight}</h3>
          <h3>price: {orderData.price}</h3>
        </>
      ) : (
        "loading..."
      )}
    </div>
  );
}
