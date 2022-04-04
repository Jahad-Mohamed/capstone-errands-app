import React from "react";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import firebaseApp from "../../../firebase";
import { onAuthStateChanged, signOut, getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  const auth = getAuth(firebaseApp);

  //Logout Function
  // useEffect(() => {
  //   return onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setUser({
  //         name: user.displayName,
  //         photoUrl: user.photoURL,
  //       });
  //     } else {
  //       setUser(null);
  //       router.push("/login");
  //     }
  //   });
  // }, []);
  useEffect(() => {
    onAuthStateChanged(auth, (user1) => {
      if (user1) {
        setUser(user1);
        console.log(user1);
      }
    });
  }, []);
  const SignOut = async () => {
    signOut(auth);

    router.push("/login");
  };
  return (
    <>
      <div className={styles.Header__container}>
        <div className={styles.Header__logo}>LOGO HERE</div>
        <div className={styles.Header__profile}>
          <div>
            {user ? (
              <h3 onClick={SignOut}>logout</h3>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
          <div className={styles.Header__profileName}>
            {user && user.displayName}
          </div>
          <img
            src={user && user.photoURL}
            alt="Profile Image"
            className={styles.Header__profileImage}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
