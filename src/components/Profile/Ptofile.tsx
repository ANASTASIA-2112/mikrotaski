import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType, ProfilePageType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";


type ProfileProps = {
    posts: Array<PostType>
    addPost: (postAdd:any) => void
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPosts
            addPost={props.addPost}
            posts={props.posts}


        />
    </div>

};
export default Profile;