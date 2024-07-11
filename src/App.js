import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import NavBar from "./components/nav/NavBar"
import Profile from "./components/profile/Profile"
// import {BrowseRouter} from "react-router-dom"
function App() {
  return (
  <div className="wrapper">
    {/* <BrowseRouter> */}
      <Header />
      <NavBar />
      <Profile name={"Elon Musk"} />
    {/* </BrowseRouter> */}
  </div>
  );
}

export default App;