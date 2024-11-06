import React from "react"
import elonmini from "../../../../img/elon_mini.jpg"
function Post(props) {
    return(
        <div className="post">
            <img className="elonmini" src={elonmini} />
            <div className="description">
                <span className="title">Elon Mask</span>
                <p className="text">{props.message}</p> 
            </div>
            <span className="likes">{props.likes} likes</span>
        </div>
    )
}

export default Post;
// function Postx2(name) {
//     console.log("hi,"+ name)
// }
// Postx2("Arina")
// Postx2("Mihail")
// Postx2("Ivan")