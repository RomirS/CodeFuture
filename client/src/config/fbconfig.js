import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA7g3VQ2bBVLKl5MUTjzPhv-F9CGJNHnL4",
    authDomain: "code-future.firebaseapp.com",
    projectId: "code-future",
    storageBucket: "code-future.appspot.com",
    messagingSenderId: "165513403370",
    appId: "1:165513403370:web:da9446301fbe2f90ddf093",
    measurementId: "G-KFL5RW0EVM"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;