import React from "react"
import "./dialogs.css"
import DialogsItem from "./dialogsItem/DialogsItem"
import Messages from "./dialogsMessages/Messages"
let dialogNames = [
    {name:"Ivan Ivanich", id:1}, 
    {name:"Alex Vasilivich", id:2}, 
    {name:"Roman Romanivich", id:3}, 
    {name:"Alexander Alexeivich", id:4},
    {name:"Dmitriy Nikolaievich", id:5}
]
let messageItems = [
    {message:"Hello, how are you?", id:1},
    {message:"Hi, Im okey and you Alex", id:2},
    {message:"Good morning Im cool what about you Alexander", id:3},
    {message:"Hi Im perfect", id:4},
    {message:"Hello everybody. Do you want to go to do sport this saturday?", id:5}
]
function Dialog(props){
    return(
        <div className="dialogs">
            <p className="name">{props.name}</p>
            <p className="answer">{props.answer}</p>
            <div className="dialog">
                <div className="items">
                    {dialogNames.map((e)=><DialogsItem name={e.name} id={e.id} />)}
                    {/* <DialogsItem name={dialogNames[0].name} id={dialogNames[0].id} />
                    <DialogsItem name={dialogNames[1].name} id={dialogNames[1].id} />
                    <DialogsItem name={dialogNames[2].name} id={dialogNames[2].id} />
                    <DialogsItem name={dialogNames[3].name} id={dialogNames[3].id} />  */}
                </div>
                <div className="messages">
                    {messageItems.map((e)=><Messages message={e.message} id={e.id} />)}
                    {/* <Messages message={messageItems[0].message} id={dialogNames[0].id} />
                    <Messages message={messageItems[1].message} id={dialogNames[1].id} />
                    <Messages message={messageItems[2].message} id={dialogNames[2].id} />
                    <Messages message={messageItems[3].message} id={dialogNames[3].id} /> */}
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