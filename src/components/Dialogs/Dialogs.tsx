import React from 'react';
import s from './Dialogs.module.css';
import {DialogsPageType} from "../../redux/state";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialodItem";



export const  Dialogs = (props:DialogsPageType) =>{

    let dialogElements = props.dialogs.map(el => <DialogItem key={el.id} name={el.name}   id={el.id}/>)
    let messagesElement = props.message.map(el => <Message key={el.id} id={el.id} message={el.message}/>)




    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messagesElement}
            </div>
        </div>
    )
}