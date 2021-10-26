//Basic react imports
import React from 'react';
import ReactDOM from 'react-dom';
//bootstrap
import './bootstrap.min.css';
//Main CSS file
import './index.css';
import reportWebVitals from './reportWebVitals';
//Main React router app
import App from './App';
//animations
import './animation';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//don't know
reportWebVitals();
