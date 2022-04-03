import { useEffect, useState } from "react";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButtons/ActionButton";
import InputButton from "./components/InputButton/Input";
import Map from "./components/Map/Map";
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
      </Head>

      <div className={styles.main__container}>
        <Header />
        <div className={styles.main__sectionContainer}>
          <ActionButton />
          <InputButton />
          <Map />
        </div>
      </div>
    </>
  );
}
