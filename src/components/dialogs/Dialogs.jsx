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
                    <DialogsItem name={"Ivan Ivanich:"} id={"1"} />
                    <DialogsItem name={"Alex Vasilivich:"} id={"2"} />
                    <DialogsItem name={"Roman Romanivich:"} id={"3"} />
                    <DialogsItem name={"Alexander Alexeivich:"} id={"4"} />
                </div>
                <div className="messages">
                    <Messages message={"Hello, how are you?"} />
                    <Messages message={"Hi, Im okey and you Alex"} />
                    <Messages message={"Good morning Im cool what about you Alexander"} />
                    <Messages message={"Hi Im perfect"} />
                </div>
                {/* <div className="message">
                    <Link to="/dialogs/2" className="name">Roman Romanich</Link> 
                    <p>Hello, Im fine and you Alex</p>
                </div>
                <div className="message">
                    <Link to="/dialogs/3" className="name">Alex Alexeivich</Link> 
                    <p>Good morning. thanks, Im cool</p>
                </div> */}
            </div>
            <input type="text" />
                <button>Otpravit</button>
        </div>
    )
}

export default Dialog