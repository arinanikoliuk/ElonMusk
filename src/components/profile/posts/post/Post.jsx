import React from "react"
function Post(props) {
    return(
        <div className="post">
            <img className="image" src={props.image} />
            <div className="description">
                <span className="title">{props.title}</span>
                <p className="text">{props.message}</p> 
                <span className="likes">{props.likes} likes</span>
            </div>
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