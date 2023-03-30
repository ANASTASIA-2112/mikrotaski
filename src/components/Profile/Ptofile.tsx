import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostType} from "../../redux/state";
import MyPosts from "./MyPosts/MyPosts";


type ProfileProps = {
    post:Array<PostType>
    addPost: (postAdd:any) => void
    newTextPost:string
    profilePage:(newTextPost:string) => void
}

const Profile = (props: ProfileProps) => {

    return <div>
        <ProfileInfo />
        <MyPosts
            addPost={props.addPost}
            posts={props.post}
            newTextPost={props.newTextPost}
            profilePage={props.profilePage}

        />
    </div>

};
export default Profile;