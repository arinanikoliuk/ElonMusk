import React from "react"
import "./post2.css"
function Post2 (props) {
    return(
        <div className="container">
            <img className="cont_image" src={props.imageSrc} alt="" />    
            <h1 className="cont_text">{props.names}</h1>
        </div>
        
    )
}

export default Post2