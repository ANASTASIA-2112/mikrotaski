import React from 'react';
import s from './MyPosts.module.css';
import News from "./Posts/News";


const MyPosts = () => {

    let   PostsData = [
        {id: 1, message: "Hi, how are you?", likeCount:12},
        {id: 2, message: "It is mu first post",likeCount:12},
        {id: 3, message: "Good",likeCount:12},
    ]
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
                <News message={PostsData[0].message} likeCount={PostsData[0].likeCount}/>
                <News message={PostsData[1].message }likeCount={PostsData[0].likeCount}/>
                <News message={PostsData[2].message }likeCount={PostsData[0].likeCount}/>

            </div>
        </div>
    );
}

export default MyPosts;

