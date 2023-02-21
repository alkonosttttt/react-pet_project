import React from "react";
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            <p>{props.message}</p>
        </div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {id:1, name:"Ann"},
        {id:2, name:"dad"},
        {id:3, name:"mom"}
    ];
    let messagesData = [
        {id:1, message: "Hi"},
        {id:2, message: "Hello"},
        {id:3, message: "How are you ?"}
    ]
    return (
        <div className={s.dialogWrap}>
            <div className={s.dialogs}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id}/>
                <Dialog name={dialogsData[1].name} id={dialogsData[1].id}/>
                <Dialog name={dialogsData[2].name} id={dialogsData[2].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} id={messagesData[0].id} />
                <Message message={messagesData[1].message} id={messagesData[1].id} />
                <Message message={messagesData[2].message} id={messagesData[2].id} />
            </div>
        </div>
    )
}

export default Dialogs;