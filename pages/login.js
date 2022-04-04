import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  getAuth,
} from "firebase/auth";
import firebaseApp from "../firebase";

const Login = () => {
  const router = useRouter();
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  useEffect(() => {
    signOut(auth);
    onAuthStateChanged(auth, (user) => {
      console.log(user);

      if (user) {
        router.push("/");
      }
    });
  }, []);
  const signIn = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      if (res) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className={styles.login__logoContainer}>
        <img
          src="https://i.ibb.co/n776JLm/bike.png"
          alt="Logo"
          className={styles.login__logo}
        />
      </div>

      <div className={styles.login__container}>
        <div className={styles.login__title}>Welcome back!</div>
        <div className={styles.login__contentContainer}>
          <div className={styles.login__details}>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="user"
              required
              className={styles.login__field}
            />
            <input
              id="password"
              type="text"
              autoComplete="name"
              placeholder="password"
              required
              className={styles.login__field}
            />
          </div>
          <div className={styles.login__details}>
            <button type="submit" className={styles.login__submit}>
              Sign In
            </button>
            <div className={styles.login__forgotPassword}>Forget Password?</div>
          </div>
          <div className={styles.login_or}> ----- OR -----</div>
          <div onClick={signIn} className={styles.login__button}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2702/2702602.png"
              width={30}
              height={30}
              alt="google icon"
            />
            Sign in with Google
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
