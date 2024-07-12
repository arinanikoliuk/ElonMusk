import React from "react"
import "./profile.css"
import elon from "../../img/elon.jpg"
import Posts from "./posts/Posts"

function Profile(props) {
    return(
      <div className="profile">
        <div className="me">
          <img className="elon" src={elon} alt="" />
          <p className="elon-text">{props.name}</p>
        </div>
        <Posts message={props.message} answer={props.answer} name={props.name} />
      </div>
    )
}

export default Profile;