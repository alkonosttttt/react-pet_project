import React from 'react';
import s from './profile.module.css';
import MyPosts from "./myposts/myposts.jsx";


const Profile = () => {
    return (
        <div className={s.profile_wrap}>
            <div>
                <img src='https://miro.medium.com/max/2880/1*ydcB-SmmYa4Zy5bmOizZlw.png' alt="back_photo" className={s.back_photo}/>
            </div>
            <div className={s.info}>
                <div>
                    ava + description
                </div>
                <MyPosts />
            </div>
        </div>
    );
}

export default Profile;