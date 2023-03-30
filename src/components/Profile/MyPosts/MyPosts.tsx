import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css';
import { ProfilePageType} from "../../../redux/state";
import Posts from "./Posts/Posts";




const MyPosts  = (props:ProfilePageType) => {
    let postsElements = props.posts.map((p) => <Posts  id={p.id} likeCount={p.likeCount} message={p.message}/>)
    //создаем ссылку на элемент на которую будет ссылаться, чтобы React создал ссылку

 //логика button

    let onAddPost = () =>{
        props.addPost(props.newTextPost)
    }

    const onChangesHandler= (e: ChangeEvent<HTMLTextAreaElement>)=>{
    props.profilePage(e.currentTarget.value);

    }



    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea
                        value={props.newTextPost}
                        onChange={onChangesHandler}
                        >

                    </textarea>
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

