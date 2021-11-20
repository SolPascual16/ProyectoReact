import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_izbcZj1jEHnu1bTLP05MPJitROau9oY",
  authDomain: "feli-pet.firebaseapp.com",
  projectId: "feli-pet",
  storageBucket: "feli-pet.appspot.com",
  messagingSenderId: "716059736088",
  appId: "1:716059736088:web:ce37af4d4a099413bbab6d"
};

const app = firebase.initializeApp(firebaseConfig)


export const getFirestore = () => {
    return firebase.firestore(app)
}