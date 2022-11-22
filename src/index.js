import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { InitialDataContext } from './InitialDataContext';


ReactDOM.hydrate(
  <React.StrictMode>
    <InitialDataContext.Provider value={(window && window.preloadedData) || {_data:{}}}>
       <BrowserRouter>
      <App />
    </BrowserRouter>
    </InitialDataContext.Provider>
   

  </React.StrictMode>,
  document.getElementById("root")
);


