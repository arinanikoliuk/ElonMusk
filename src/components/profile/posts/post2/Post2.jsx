import React from "react"
import "./post2.css"
function Post2 (props) {
    return(
        <div className="container">
            <img className="cont_image" src={props.imageSrc} alt="" /> 
            <div className="content">
                <h1 className="text2">{props.names}</h1>
                <p className="description">{props.description}</p>
            </div>
        </div>
        
    )
}

export default Post2