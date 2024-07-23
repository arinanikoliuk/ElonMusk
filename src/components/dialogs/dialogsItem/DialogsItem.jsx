import React from "react"
import {Link} from "react-router-dom"
const DialogsItem=(props)=>{
    return (
        <div className="user">
            <Link to={`/dialogs/${props.id}`} className="name">{props.name}</Link> 
        </div>
    )
}

export default DialogsItem