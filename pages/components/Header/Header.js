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
  const [dropdown, setDropdown] = useState(false);

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
  const handleDropdown = async () => {
    setDropdown(!dropdown);
  };
  const SignOut = async () => {
    signOut(auth);

    router.push("/login");
  };
  return (
    <>
      <div className={styles.Header__container}>
        <div className={styles.Header__logo}>LOGO HERE</div>
        <div className={styles.Header__profile}>
          <Link href="./howitworks">
            <div className={styles.Header_howItworks}> How it works </div>
          </Link>
          <Link href="./about">
            <div className={styles.Header__profile}>About</div>
          </Link>
          <div></div>
          <div className={styles.Header__profileName}>
            {user && user.displayName}
          </div>

          {user ? (
            <div className={styles.avatar}>
              <img
                onClick={handleDropdown}
                src={user && user.photoURL}
                alt="Profile Image"
                className={styles.Header__profileImage}
              />
              {dropdown && (
                <div className={styles.dropdown}>
                  <h3>
                    <Link href="/orderHistory">
                      <span className={styles.dropdown_item}>
                        Order History
                      </span>
                    </Link>
                  </h3>
                  <h3>
                    <Link href="/account">Account</Link>
                  </h3>
                  <h3 onClick={SignOut}>logout</h3>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login">
              <span className={styles.loginBtn}>Login</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
