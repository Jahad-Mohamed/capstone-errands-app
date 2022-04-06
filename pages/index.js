import { useEffect, useState } from "react";
import Head from "next/head";

// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButtons/ActionButton";
import InputButton from "./components/InputButton/Input";
import Map2 from "./components/Map/Map2";
// import { auth } from "../firebase";
// import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

export default function Home() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  return (
    <>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v2.7.0/mapbox-gl.css"
          rel="stylesheet"
        />

        <script src="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.min.js"></script>
        <link
          rel="stylesheet"
          href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v5.0.0/mapbox-gl-geocoder.css"
          type="text/css"
        ></link>
      </Head>
      <body>
        {/* <script src="https://maps.googleapis.com/maps/api/js?AIzaSyAlNeMzTCEpwEgGDlpOkedM8n7B7a9vwhU&libraries=places&callback=initAutocomplete"></script> */}
      </body>
      <Header />
      <div className={styles.main__container}>
        <div className={styles.main__sectionContainer}>
          <div className={styles.main__actionBtnContainer}>
            <ActionButton />
          </div>

          <Map2 />
        </div>
      </div>
    </>
  );
}
