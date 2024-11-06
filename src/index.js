import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let post1_data=[
  {text:"Space X is the best company", id:1, likes:121}, 
  {text:"My rockets are explaining Mars", id:2, likes:345},
  {text:"Tesla is the best car you can have", id:3, likes:159}
]

let dialogs_data=[
  {name:"Elon Musk", id:1},
  {name:"Bill Geits", id:2},
  {name:"Mark Cukenberg", id:3}
]

let messages_data=[
  {message:"Go to Mars", id:1},
  {message:"Where is my chip", id:2},
  {message:"Hello", id:3},
]
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App 
      post1_data={post1_data}
      // dialogNames={dialogNames}
      // messages_data={messages_data} 
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
