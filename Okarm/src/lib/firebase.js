// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4c2sAgpMxNOOnZHd74p8ksFB2dwGuNp0",
  authDomain: "okarm-400e7.firebaseapp.com",
  projectId: "okarm-400e7",
  storageBucket: "okarm-400e7.firebasestorage.app",
  messagingSenderId: "356272704289",
  appId: "1:356272704289:web:a50dace4632de5a2f90c60",
  measurementId: "G-T3JG8HW9WD"
};

let firebaseApp; // Declare firebaseApp outside the function

export const initializeFirebase = () => {
    if (!firebaseApp) { // Only initialize once
      const firebaseConfig = {
        apiKey: "AIzaSyA4c2sAgpMxNOOnZHd74p8ksFB2dwGuNp0",
        authDomain: "okarm-400e7.firebaseapp.com",
        projectId: "okarm-400e7",
        storageBucket: "okarm-400e7.firebasestorage.app",
        messagingSenderId: "356272704289",
        appId: "1:356272704289:web:a50dace4632de5a2f90c60",
        measurementId: "G-T3JG8HW9WD"
      };

        firebaseApp = initializeApp(firebaseConfig);

        if (typeof window !== 'undefined') {
            getAnalytics(firebaseApp);
        }
    }
    return firebaseApp;
};


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export {app}

export const app = firebaseApp;