import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import data from './data/data.json';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App props={data} />
  // </React.StrictMode>
  <BrowserRouter>
    <App props={data} />
  </BrowserRouter>
);
