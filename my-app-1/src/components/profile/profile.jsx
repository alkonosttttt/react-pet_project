import React from 'react';
import s from './profile.module.css';
import MyPosts from "./myposts/myposts.jsx";
import ProfileInfo from "./profileInfo/profileInfo";


const Profile = (props) => {

    return (
        <div className={s.profile_wrap}>
            <ProfileInfo/>
            <MyPosts postsData={props.postsData}/>
        </div>
    );
}

export default Profile;