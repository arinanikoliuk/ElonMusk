import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./Data/state";
import {addPost} from "./Data/state"
let rerenderthree=()=>{
  ReactDOM.render(
  <React.StrictMode>
    <App 
      state={state} addPost={addPost}
    />
  </React.StrictMode>
);}
rerenderthree()

reportWebVitals();