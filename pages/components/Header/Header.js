import React from "react";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";

const Header = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

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
  return (
    <>
      <div className={styles.Header__container}>
        <div className={styles.Header__logo}>LOGO HERE</div>
        <div className={styles.Header__profile}>
          <div className={styles.Header__profileName}>{user && user.name}</div>
          <img
            src={user && user.photoUrl}
            alt="Profile Image"
            className={styles.Header__profileImage}
            onClick={() => signOut(auth)}
          />
        </div>
      </div>
    </>
  );
};

export default Header;
