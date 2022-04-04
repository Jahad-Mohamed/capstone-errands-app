// // Import the functions you need from the SDKs you need
// import { initializeApp, getApps } from "firebase/app";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig =
// let app;
// // Initialize Firebase
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// }

// const provider = new GoogleAuthProvider();
// const auth = getAuth();

// export { app, provider, auth };

import { initializeApp, getApps } from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCCLDoR2__M0MVu2v9BHNi6xNwJS5Ng3h4",
  authDomain: "capstone-project-errands-9ab16.firebaseapp.com",
  projectId: "capstone-project-errands-9ab16",
  storageBucket: "capstone-project-errands-9ab16.appspot.com",
  messagingSenderId: "712771390565",
  appId: "1:712771390565:web:c62ed3d2ee6a7fd6e14a8c",
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
