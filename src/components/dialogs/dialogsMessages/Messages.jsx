import React from "react"
const Messages=(props)=> {
    return(
        <div className="message">
            <p className="message_text">{props.message}</p>
        </div>
    )
}
export default Messages