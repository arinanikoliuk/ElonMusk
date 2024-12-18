import React from "react"
import "./dialogs.css"
import DialogsItem from "./dialogsItem/DialogsItem"
import Messages from "./dialogsMessages/Messages"
let dialogsText=React.createRef()
function Dialog(props){
    let addMessage=()=>{
        props.addMessage(dialogsText.current.value)
        alert(dialogsText.current.value)
    }
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
            <input ref={dialogsText} type="text" />
            <button onClick={addMessage}>Otpravit</button>
        </div>
    )
}

export default Dialog