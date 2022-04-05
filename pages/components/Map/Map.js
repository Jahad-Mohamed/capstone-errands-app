import React from "react";
import styles from "../../../styles/Home.module.css";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";
import { useRouter } from "next/router";

mapboxgl.accessToken =
  "pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ";

const Map = (props) => {
  const router = useRouter();

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-0.127758, 51.507351],
      zoom: 10,
    });

    if (props.pickUpCoordinates) {
      addToMap(map, props.pickUpCoordinates);
    }
    if (props.dropOffCoordinates) {
      addToMap(map, props.dropOffCoordinates);
    }

    map.addControl(new mapboxgl.NavigationControl());
    props.pickUpCoordinates
      ? map.fitBounds(
          [
            props.pickUpCoordinates, // southwestern corner of the bounds
            props.dropOffCoordinates, // northeastern corner of the bounds
          ],
          { padding: 100 }
        )
      : "";
    async function getRoute(end) {
      // make a directions request using cycling profile
      // an arbitrary start will always be the same
      // only the end or destination will change
      const query = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${props.pickUpCoordinates[0]},${props.pickUpCoordinates[1]};${props.dropOffCoordinates[0]},${props.dropOffCoordinates[1]}?geometries=geojson&access_token=pk.eyJ1IjoiamF5YmFubmtzIiwiYSI6ImNsMWM1OXUzaDA0YzczanA0emZ3bmFkNXcifQ.8X8knS_wMIwru9_uHZRERQ`,
        { method: "GET" }
      );
      const json = await query.json();
      const data = await json.routes[0];
      const route = data ? data.geometry.coordinates : "";
      const geojson = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: route,
        },
      };
      // if the route already exists on the map, we'll reset it using setData
      if (map.getSource("route")) {
        map.getSource("route").setData(geojson);
      }
      // otherwise, we'll make a new request
      else {
        map.addLayer({
          id: "route",
          type: "line",
          source: {
            type: "geojson",
            data: geojson,
          },
          layout: {
            "line-join": "round",
            "line-cap": "round",
          },
          paint: {
            "line-color": "#3887be",
            "line-width": 5,
            "line-opacity": 0.75,
          },
        });
      }
      // add turn instructions here at the end
    }

    map.on("load", () => {
      // make an initial directions request that
      // starts and ends at the same location
      props.pickUpCoordinates ? getRoute(props.pickUpCoordinates) : "";

      // Add starting point to the map
      props.pickUpCoordinates
        ? map.addLayer({
            id: "point",
            type: "circle",
            source: {
              type: "geojson",
              data: {
                type: "FeatureCollection",
                features: [
                  {
                    type: "Feature",
                    properties: {},
                    geometry: {
                      type: "Point",
                      coordinates: props.pickUpCoordinates,
                    },
                  },
                ],
              },
            },
            paint: {
              "circle-radius": 10,
              "circle-color": "#3887be",
            },
          })
        : "";
      // this is where the code from the next step will go
    });
  }, [props.pickUpCoordinates, props.dropOffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker({ color: "blue" })
      .setLngLat(coordinates)
      .addTo(map);
  };

  return <div id="map" className={`${styles.map} ${styles.fit}`}></div>;
};

export default Map;
