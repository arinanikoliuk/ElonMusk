import React from "react"
import "./profile.css"
// import elon from "../../img/elon.jpg"
import Posts from "./posts/Posts"
import Profileinfo from "./profileinfo/Profileinfo" 

function Profile(props) {
    return(
      <div className="profile">
        <Profileinfo/>
        {/*  */}
        <Posts post_data={props.post1_data}/>
        <Posts description_cat={props.description_cats}/>
        {/* <Posts message={props.message} answer={props.answer} name={props.name} /> */}
      </div>
    )
}

export default Profile;