import React from 'react';
import s from './../Dialogs.module.css';
import {MessageType} from "../../../redux/state";


const Message = (props:MessageType) => {

    let newMessageElement = React.createRef<HTMLTextAreaElement>();

    let onAddMessage = () => {
        if (newMessageElement.current?.value) {

        }
    }
    console.log(onAddMessage)
    return <div className={s.dialogs}>{props.id}

        <div className={s.messages}>
            <textarea ref={newMessageElement}></textarea>
            <button onClick={onAddMessage}>Add post</button>
        </div>


    </div>


}


export default Message;