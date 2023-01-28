import React from 'react';
import s from './MyPosts.module.css';
import Post from "../Posts/Post";



const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message = "Hi, how are you?"/>
                <Post message= "It is mu first post"/>

            </div>
        </div>
    );
}

export default MyPosts;

