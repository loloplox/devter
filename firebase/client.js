// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GithubAuthProvider, onAuthStateChanged} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAfXHYH8uIN3Ygr26q52GxT2kwvgsRkK8M",
    authDomain: "devtter-8c6ca.firebaseapp.com",
    projectId: "devtter-8c6ca",
    storageBucket: "devtter-8c6ca.appspot.com",
    messagingSenderId: "388937984240",
    appId: "1:388937984240:web:230424fa1034f3055fba35",
    measurementId: "G-F9BW1X5RZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const mapUserFromGithub = (user) => (
    {
        name: user.displayName,
        photo: user.photoURL,
        email: user.email
    }
)

export const onAuthStateChange = (onChange) => {
    const auth = getAuth()

    // El user de a continuation es el objeto completo de la autenticación con github
    return onAuthStateChanged(auth, user => {
        const normalizedUser = user && mapUserFromGithub(user)
        onChange(normalizedUser)
    })
}

export const loginWithGithub = () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider)
}
