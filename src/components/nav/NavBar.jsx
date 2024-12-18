import React from "react"
import "./nav.css"
import {Link} from "react-router-dom"
function NavBar(props) {
    return(
      <div className="nav">
        <Link to="/profile" className="nav-profile">Profile</Link>
        <Link to="/messages" className="nav-profile">Messages</Link>
        <Link to="/users" className="nav-profile">Users</Link>
        <Link to="/dialogs" className="nav-profile">Dialogs</Link> 
        <Link to="/feed" className="nav-profile">Feed</Link>
        <Link to="/friends" className="nav-profile">Friends</Link>
        <div className="content_nav">
          <p className="title">Friends:</p> 
          <br />
          <div className="avatar_container">
            {props.navMenu.friends.map((e)=>{
              return(
                <Link to="/dialogs">
                  <div className="avatar_content">
                    <img src={e.ava} alt="cat"></img>
                    <p className="text">{e.name}</p>
                  </div>
                </Link>
              ) 
            })}
          </div>
        </div>
      </div>
    )
}

export default NavBar;