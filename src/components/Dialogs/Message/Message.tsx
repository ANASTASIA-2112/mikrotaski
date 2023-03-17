import React from 'react';
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/state";





const Message :React.FC<MessageType> = (props) => {
    return <div className={s.dialogs}>{props.id}</div>
}


export default Message;