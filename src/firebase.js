import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, getDoc } from "firebase/firestore";

const {
    REACT_APP_API_KEY,
    REACT_APP_AUTH_DOMAIN,
    REACT_APP_PROJECT_ID,
    REACT_APP_STORAGE_BUCKET,
    REACT_APP_MESSAGING_SENDER_ID,
    REACT_APP_APP_ID,
    REACT_APP_MEASUREMENT_ID
} = process.env;

const firebaseConfig = {
    apiKey: REACT_APP_API_KEY,
    authDomain: REACT_APP_AUTH_DOMAIN,
    projectId: REACT_APP_PROJECT_ID,
    storageBucket: REACT_APP_STORAGE_BUCKET,
    messagingSenderId: REACT_APP_MESSAGING_SENDER_ID,
    appId: REACT_APP_APP_ID,
    measurementId: REACT_APP_MEASUREMENT_ID
};

console.log(JSON.stringify(firebaseConfig, 0, 2));
console.log(process.env);

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);

// Auth methods

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const { user } = res;
        const usersRef = collection(db, "users");
        const query = query(usersRef, where("uid", "==", user.uid));
        const snapshot = await getDoc(query);
        if (snapshot.length === 0) {
            await addUserToDb({
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email
            });
        }
        // const credential = GoogleAuthProvider.credentialFromResult(res);
        // const token = credential.accessToken;
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const signInWithPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithPassword = async (name, email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addUserToDb({ ...user, name });
    return res.user;
};

const sendPasswordResetEmail = async email => {
    try {
        await auth.sendPasswordResetEmail(email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = async () => {
    try {
        await signOut(auth);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const addUserToDb = async ({ uid, name, email }) => {
    const res = await addDoc(collection(db, "users"), {
        uid,
        name,
        authProvider: "local",
        email,
        createdOn: new Date().toISOString()
    });

    return res;
};

export {
    auth,
    db,
    signInWithGoogle,
    signInWithPassword,
    registerWithPassword,
    sendPasswordResetEmail,
    logout,
    analytics
};
