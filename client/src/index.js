import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { FirestoreProvider } from 'react-firestore';
import reportWebVitals from './reportWebVitals';

import App from './components/App';
import './index.css';

const config = {
    apiKey: "AIzaSyA7g3VQ2bBVLKl5MUTjzPhv-F9CGJNHnL4",
    authDomain: "code-future.firebaseapp.com",
    projectId: "code-future",
    storageBucket: "code-future.appspot.com",
    messagingSenderId: "165513403370",
    appId: "1:165513403370:web:da9446301fbe2f90ddf093",
    measurementId: "G-KFL5RW0EVM"
};

firebase.initializeApp(config);

ReactDOM.render(
  <React.StrictMode>
      <FirestoreProvider firebase={firebase}>
        <App />
      </FirestoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();