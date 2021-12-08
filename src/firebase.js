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
import {
    getFirestore,
    collection,
    addDoc,
    setDoc,
    query,
    where,
    getDocs,
    getDoc,
    doc
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();
const analytics = getAnalytics(app);

// Auth methods

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
    const res = await signInWithPopup(auth, googleProvider);
    const { user } = res;
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "==", user.uid));
    const snapshot = await getDocs(q);
    if (snapshot.length === 0) {
        const { uid, displayName, email } = user;

        await addUserToDb({
            uid,
            displayName,
            authProvider: "google",
            email
        });
    }

    return res;
    // const credential = GoogleAuthProvider.credentialFromResult(res);
    // const token = credential.accessToken;
};

const signInWithPassword = async (email, password) => {
    try {
        // Sign user in
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithPassword = async (displayName, email, password) => {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addUserToDb({ ...user, displayName, docId: res.user.uid });
    return user;
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

const addUserToDb = async ({ uid, displayName, email, authProvider = "local", docId = null }) => {
    const payload = {
        uid,
        displayName,
        authProvider,
        email,
        createdOn: new Date().toISOString()
    };

    let res;

    if (docId) {
        res = await setDoc(doc(db, "users", docId), payload);
    } else {
        res = await addDoc(collection(db, "users"), payload);
    }

    return res;
};

const getUser = async uid => {
    const userSnap = await getDoc(doc(db, "users", uid));
    if (userSnap.exists()) {
        console.log("Found user!");
        return userSnap.data();
    }
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
