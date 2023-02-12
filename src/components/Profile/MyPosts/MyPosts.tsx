import React from 'react';
import s from './MyPosts.module.css';
import News from "./Posts/News";


const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                <News message="Hi, how are you?"/>
                <News message="It is mu first post"/>

            </div>
        </div>
    );
}

export default MyPosts;

