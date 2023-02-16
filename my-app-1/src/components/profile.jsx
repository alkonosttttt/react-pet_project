import React from 'react';
import s from './profile.module.css';


const Profile = () => {
    return (
        <div className={s.profile_wrap}>
            <div>
                <img src='https://miro.medium.com/max/2880/1*ydcB-SmmYa4Zy5bmOizZlw.png' alt="back_photo" className={s.back_photo}/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                my posts
                <div>
                    new post
                </div>
                <div>
                    <div className={s.item}>
                        <p>post1</p>
                    </div>
                    <div className={`${s.item} ${s.active}`}>
                        <p>post2</p>
                    </div>
                    <div className={s.item}>
                        <p>post3</p>
                    </div>
                </div>
            </div>



            <p>tftyf</p>
        </div>
    );
}

export default Profile;