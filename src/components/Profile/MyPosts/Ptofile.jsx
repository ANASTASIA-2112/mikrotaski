import React from 'react';
import MyPosts from "./MyPosts";


const Profile = () => {
    return (<div >
            <img
                src="https://smartdesignstudiolabs.files.wordpress.com/2019/01/smm-1.jpg" alt={"avatar"} />

            <div>
                <MyPosts/>
            </div>
        </div>
    )
}
export default Profile;
