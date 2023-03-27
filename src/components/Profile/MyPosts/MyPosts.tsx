import React, {useRef} from 'react';
import s from './MyPosts.module.css';
import {addPost, ProfilePageType} from "../../../redux/state";
import DialogItem from "../../Dialogs/DialogItem/DialodItem";
import Profile from "../Ptofile";
import message from "../../Dialogs/Message/Message";
import Posts from "./Posts/Posts";



const MyPosts  = (props:ProfilePageType) => {
    let postsElements = props.posts.map((p) => <Posts  id={p.id} likeCount={p.likeCount} message={p.message}/>)
    //создаем ссылку на элемент на которую будет ссылаться, чтобы React создал ссылку
    let newPostElement = React.createRef<HTMLTextAreaElement>();

 //логика button

    let onAddPost = () =>{
        if (newPostElement.current){
            props.addPost(newPostElement.current.value)
        }
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea  className={s.posts} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;

