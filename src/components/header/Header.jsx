import React from "react"
import "./header.css"
import logo from "../../img/logo.svg"
function Header() {
    return(
      <div className="header">
        <a href="/"><img src={logo} alt=""/></a>
      </div>
    )
}

export default Header;