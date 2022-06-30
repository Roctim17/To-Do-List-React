// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhldIY9QykjdxfcCIxqGr3ClXfVifiqfE",
    authDomain: "todo-list-b089a.firebaseapp.com",
    projectId: "todo-list-b089a",
    storageBucket: "todo-list-b089a.appspot.com",
    messagingSenderId: "524998928889",
    appId: "1:524998928889:web:0b138904c7b04c84de7528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;