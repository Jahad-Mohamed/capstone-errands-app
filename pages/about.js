import React from "react";
import styles from "../styles/Home.module.css";

const about = () => {
  return (
    <div className={styles.about__container}>
      <h1>About</h1>
      <h3>Get More Done in Less Time</h3>
      <p>
        This app was created and developed as part capstone project Web
        Development Diploma Programme at BrainStation . The concept of the app
        began with a simple desire to save time and allowing yourself to spend
        it on the things you enjoy! Errands is a same-day service platform that
        instantly connects you with delivery partner to help with odd-jobs and
        errands, so you can be more productive, every day!
      </p>
      <div className={styles.about__techStackContainer}>
        <h2>Tech Stack</h2>
        <div></div>
        <div>
          <div>
            <img
              src="https://brandlogos.net/wp-content/uploads/2020/09/react-logo.png"
              alt="react logo"
              className={styles.about__techStackLogo}
            />
          </div>
          <div>
            <>
              <img
                src="https://www.pikpng.com/pngl/b/150-1506141_html-css-and-javascript-logo-html5-css3-js.png"
                alt=""
                className={styles.about__techStackLogo}
              />
            </>
          </div>
          <span>
            <img src="https://www.pngegg.com/en/png-eoivg" alt="" />
            className={styles.about__techStackLogo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default about;
