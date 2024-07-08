import React from "react"
import "./nav.css"
function NavBar() {
    return(
      <div className="nav">
        <a className="nav-profile">Profile</a>
        <a className="nav-messages">Messages</a>
        <a className="nav-users">Users</a>
      </div>
    )
}

export default NavBar;