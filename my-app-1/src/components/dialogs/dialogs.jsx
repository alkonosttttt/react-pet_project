import React from "react";
import s from './dialogs.module.css'

import DialogItem from "./dialogItem/dialogItem";
import Message from "./message/message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsData.map( dialogs => {
        return (
            <DialogItem name={dialogs.name} id={dialogs.id}/>
        )
    })
    let messagesElements = props.messagesData.map( messages => {
        return (
            <Message message={messages.message} id={messages.id} />
        )
    })


    return (
        <div className={s.dialogWrap}>
            <div className={s.dialogs}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;