import React from "react"
import "./post2.css"
function Post2 (props) {
    return(
        <div className="container">
            <img className="cont_image" src={props.imageSrc} alt="" /> 
            <div className="content">
                <span>Krasivii Kotik</span>   
                <h1 className="text2">{props.names}</h1>
            </div>
        </div>
        
    )
}

export default Post2