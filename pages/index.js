import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "./components/Header/Header";
import ActionButton from "./components/ActionButtons/ActionButton";
import InputButton from "./components/InputButton/Input";

import Map from "./components/Map/Map";

export default function Home() {
  return (
    <>
      <Map />
      <div className={styles.main__container}>
        <Header />
        <ActionButton />
        <InputButton />
      </div>
    </>
  );
}