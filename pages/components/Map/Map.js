import React from "react";
import styles from "../../../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.127758, 51.507351],
      zoom: 11,
    });

    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
      console.log(pickUpCoordinates);
    }
    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
      console.log(dropOffCoordinates);
    }

    if (props.pickUpCoordinates && props.dropOffCoordinates) {
      map.fitBounds([props.pickUpCoordinates, props.dropOffCoordinates], {
        padding: 60,
      });
    }
  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    console.log("1" + coordinates);
    const marker1 = new mapboxgl.Marker({ color: "#FFFFFF" })
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <div id="map" className={styles.map}></div>;
};

export default Map;
