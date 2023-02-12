import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://smartdesignstudiolabs.files.wordpress.com/2019/01/smm-1.jpg" alt={"avatar"}/>
            </div>

            <div className={s.descriptionBlock}>
                ava+desription
            </div>

        </div>
    )
}
export default ProfileInfo;
