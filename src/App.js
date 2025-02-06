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
  return (
  <Router>
  <div className="wrapper">
    <Header />
    <NavBar navMenu={props.state.navMenu} />
    <Routes>
    <Route path="/" element={<Profile data={props.state.profile_page} dispatch={props.dispatch} new_post_text={props.state.profile_page.new_post_text}/>} />,
      <Route path="/profile" element={<Profile data={props.state.profile_page} new_post_text={props.state.profile_page.new_post_text} dispatch={props.dispatch}/>} />,
      <Route path="/dialogs" element={<Dialogs dialog={props.state.dialogs_page} messages_data={props.state.messages_data} dispatch={props.dispatch} new_dialog_text={props.state.dialogs_page.new_dialog_text}/>} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/friends" element={<Friends />} />
    </Routes>
  </div>
  </Router>
  );
}

export default App;