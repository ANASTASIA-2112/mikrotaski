import React from 'react';
import s from './MyPosts.module.css';
import { ProfilePageType} from "../../../redux/state";



const MyPosts :React.FC<ProfilePageType> = (props) => {
   let  postsElements =props.posts.map((p) => p.message)


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
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;

