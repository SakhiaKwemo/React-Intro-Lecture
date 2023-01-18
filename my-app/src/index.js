import React from 'react';
import ReactDOM from 'react-dom/client';
import Hello from './Component/Hello'
import WebPage from './Component/webPage';
import Counter from './Component/Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello height="180cm" name="Sakhia" color="red"/>
    <Hello height="150cm" name="Anthony" color="yellow"/> */}
    <WebPage name="green" color="green"/>
    <WebPage name="red" color="red"/>
    <WebPage name="yellow" color="yellow"/>
    <Counter/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

