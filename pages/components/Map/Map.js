import React from "react";
import styles from "../../../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [-0.127758, 51.507351],
      zoom: 9.5,
    });
  });
  return <div id="map" className={styles.map}></div>;
};

export default Map;
