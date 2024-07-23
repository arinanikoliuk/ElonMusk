import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import NavBar from "./components/nav/NavBar"
import Profile from "./components/profile/Profile"
import Dialogs from "./components/dialogs/Dialogs"
import Feed from "./components/feed/Feed"
import Friends from "./components/friends/Friends"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
function App() {
  return (
  <Router>
  <div className="wrapper">
    <Header />
    <NavBar />
    {/* <Profile name={"Elon Musk"} /> */}
    <Routes>
      <Route path="/profile" element={<Profile />} />
      <Route path="/dialogs" element={<Dialogs />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  </div>
  </Router>
  );
}

export default App;