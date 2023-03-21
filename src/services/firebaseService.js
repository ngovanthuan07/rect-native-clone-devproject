import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAamMjqAXXa80PAp9FYEe_0B5VQU_SaMJ0",
    authDomain: "tiktok-3467d.firebaseapp.com",
    databaseURL: "https://tiktok-3467d-default-rtdb.firebaseio.com",
    projectId: "tiktok-3467d",
    storageBucket: "tiktok-3467d.appspot.com",
    messagingSenderId: "550507748914",
    appId: "1:550507748914:web:48af23c3487cd8d569a62b",
    measurementId: "G-XY91DGFQYB"
};
/*
let appInitialized = false;

const initializeFirebase = () => {
  if (!appInitialized) {
    initializeApp(firebaseConfig)    

    appInitialized = true;
  }
};
export { initializeFirebase };
**/
const app = initializeApp(firebaseConfig);

export default app;