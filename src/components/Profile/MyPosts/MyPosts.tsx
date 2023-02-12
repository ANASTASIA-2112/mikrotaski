import React from 'react';
import s from './MyPosts.module.css';
import News from "../Posts/News";



const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <News message = "Hi, how are you?"/>
                <News message= "It is mu first post"/>

            </div>
        </div>
    );
}

export default MyPosts;

