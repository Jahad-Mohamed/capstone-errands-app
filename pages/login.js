import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../../firebase";

const Login = () => {
  const router = () => useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push("./");
      }
    });
  }, []);

  return (
    <div className={styles.login__container}>
      <img
        src="https://i.ibb.co/n776JLm/bike.png"
        alt="Logo"
        className={styles.login__logo}
      />
      <div className={styles.login__title}>Login to access your account</div>
      <div className={styles.login__heroContainer}>
        {" "}
        <img src="" alt="" className={styles.login__hero} />
      </div>
      <div
        onClick={() => signInWithPopup(auth, provider)}
        className={styles.login__button}
      >
        Sign in with Google
      </div>
    </div>
  );
};

export default Login;
