import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-0.127758, 51.507351],
      zoom: 9.5,
    });
  });

  return (
    <div className={styles.container}>
      <div id="map" className={styles.map}>
        Map
      </div>
      <div className={styles.start}>Start</div>
    </div>
  );
}
