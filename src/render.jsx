import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addPost} from "./Data/state"
import {addMessage} from "./Data/state"
import {onNewPostText} from "./Data/state"
import {onNewDialogText} from "./Data/state"
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderTree=(state)=>{
  root.render(
    <React.StrictMode>
      <App 
        state={state} onNewPostText={onNewPostText} onNewDialogText={onNewDialogText} addPost={addPost} addMessage={addMessage}
      />
    </React.StrictMode>
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();