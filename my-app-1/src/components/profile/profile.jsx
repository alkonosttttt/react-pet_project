import React from 'react';
import s from './profile.module.css';
import MyPosts from "./myposts/myposts.jsx";
import ProfileInfo from "./myposts/profileInfo/profileInfo";


const Profile = () => {
    return (
        <div className={s.profile_wrap}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;