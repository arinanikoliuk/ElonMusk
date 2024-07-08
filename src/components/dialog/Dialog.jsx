import React from "react"
function Dialog(props){
    return(
        <div className="dialog">
            <p className="name">{props.name}</p>
            <p className="answer">{props.answer}</p>
        </div>
    )
}

export default Dialog