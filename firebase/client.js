// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, getFirestore, orderBy, query, Timestamp } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";

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
const db = getFirestore();
const storage = getStorage(app);

const mapUserFromGithub = (user) => ({
    name: user.displayName,
    photo: user.photoURL,
    email: user.email,
    uid: user.uid
});

export const onAuthStateChange = (onChange) => {
    const auth = getAuth();
    
    // El user de a continuation es el objeto completo de la autenticación con github
    return onAuthStateChanged(auth, (user) => {
        const normalizedUser = user && mapUserFromGithub(user);
        onChange(normalizedUser);
    });
};

export const loginWithGithub = () => {
    const provider = new GithubAuthProvider();
    const auth = getAuth();
    signInWithPopup(auth, provider);
};


export const addDivt = ({ avatar, content, userId, username, email, img }) => {
    return addDoc(collection(db, "divts"), {
        avatar,
        content,
        userId,
        username,
        email,
        img,
        createdAt: Timestamp.fromDate(new Date()),
        likesCount: 0,
        sharedCounts: 0
    });
};

export const fetchLatestDivts = () => {
    const q = query(collection(db, "divts"), orderBy("createdAt", "desc"));
    
    return getDocs(q).then(response => {
        const docs = response.docs;
        return docs.map(item => {
            const data = item.data();
            const id = item.id;
            const { createdAt } = data;
            
            return {
                id,
                ...data,
                createdAt: +createdAt.toDate()
            };
        });
    });
};

export const uploadImage = (file) => {
    const reference = ref(storage, `images/${file.name}`);
    return uploadBytesResumable(reference, file);
};
