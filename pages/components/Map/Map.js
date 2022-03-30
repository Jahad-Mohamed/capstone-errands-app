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
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.127758, 51.507351],
      zoom: 10,
    });
    const marker1 = new mapboxgl.Marker({ color: "blue" })
      .setLngLat([-0.024261, 51.545492])
      .addTo(map);

    const marker2 = new mapboxgl.Marker({ color: "black" })
      .setLngLat([-0.083799, 51.52621])
      .addTo(map);
    // const marker2 = new mapboxgl.Marker({ color: "black" })
    //   .setLngLat([-0.083799, 51.52621])
    //   .addTo(map);
  });
  return <div id="map" className={styles.map}></div>;
};

export default Map;
