import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfilePageType} from "../../../redux/state";

const ProfileInfo :React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <div className={s.avatar}>
                <img src="https://smartdesignstudiolabs.files.wordpress.com/2019/01/smm-1.jpg" alt={"avatar"}/>
            </div>

            <div className={s.descriptionBlock}>
                ava+desription
            </div>

        </div>
    )
}
export default ProfileInfo;
