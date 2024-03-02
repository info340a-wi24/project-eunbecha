import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import data from './data/data.json';
import './index.css';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCNYFQeC3RgSs0NZgIBTqaW_S2xBBF46c",
  authDomain: "info340a-wi24-group7.firebaseapp.com",
  projectId: "info340a-wi24-group7",
  storageBucket: "info340a-wi24-group7.appspot.com",
  messagingSenderId: "856849657606",
  appId: "1:856849657606:web:571eac5d795902f8653887",
  measurementId: "G-MR1HG8Z4W5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App props={data} />
  // </React.StrictMode>
  <BrowserRouter>
    <App props={data} />
  </BrowserRouter>
);
