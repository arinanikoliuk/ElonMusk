import React from 'react';
import './App.css';
import Header from "./components/header/Header"
import NavBar from "./components/nav/NavBar"
import Profile from "./components/profile/Profile"
import Dialogs from "./components/dialogs/Dialogs"
import Feed from "./components/feed/Feed"
import Friends from "./components/friends/Friends"
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
function App(props) {
  let post1_data=[
    {text:"Space X is the best company", id:1, likes:121}, 
    {text:"My rockets are explaining Mars", id:2, likes:345},
    {text:"Tesla is the best car you can have", id:3, likes:159}
]
  return (
  <Router>
  <div className="wrapper">
    <Header />
    <NavBar />
    {/* <Profile name={"Elon Musk"} /> */}
    <Routes>
      <Route path="/profile" element={<Profile post1_data={post1_data}/>} />
      <Route path="/dialogs" element={<Dialogs />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  </div>
  </Router>
  );
}

export default App;