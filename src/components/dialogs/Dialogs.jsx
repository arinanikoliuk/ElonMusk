import React from "react"
import "./dialogs.css"
import DialogsItem from "./dialogsItem/DialogsItem"
import Messages from "./dialogsMessages/Messages"
function Dialog(props){
    return(
        <div className="dialogs">
            <p className="name">{props.name}</p>
            <p className="answer">{props.answer}</p>
            <div className="dialog">
                <div className="items">
                    {props.dialog.dialogs_data.map((e)=><DialogsItem name={e.name} id={e.id} />)}
                </div>
                <div className="messages">
                    {props.dialog.messages_data.map((e)=><Messages message={e.message} id={e.id} />)}
                </div>
            </div>
            <input type="text" />
                <button>Otpravit</button>
        </div>
    )
}

export default Dialog