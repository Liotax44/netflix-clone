// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCR3l47DQspCB9O9B3zfBppbb8UFB-E304",
    authDomain: "netflix-clone-5c866.firebaseapp.com",
    projectId: "netflix-clone-5c866",
    storageBucket: "netflix-clone-5c866.appspot.com",
    messagingSenderId: "515314069459",
    appId: "1:515314069459:web:6be3b67d525c0938308926"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }