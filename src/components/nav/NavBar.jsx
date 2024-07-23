import React from "react"
import "./nav.css"
import {Link} from "react-router-dom"
function NavBar() {
    return(
      <div className="nav">
        <Link to="/profile" className="nav-profile">Profile</Link>
        <Link to="/messages" className="nav-profile">Messages</Link>
        <Link to="/users" className="nav-profile">Users</Link>
        <Link to="/dialogs" className="nav-profile">Dialogs</Link> 
        <Link to="/feed" className="nav-profile">Feed</Link>
        <Link to="/friends" className="nav-profile">Friends</Link>
      </div>
    )
}

export default NavBar;