// libraries
import React from 'react';
import ReactDOM from 'react-dom';
// reports
import reportWebVitals from './reportWebVitals';
// self
import './index.css';
import Bootstrap from './Bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Bootstrap />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
