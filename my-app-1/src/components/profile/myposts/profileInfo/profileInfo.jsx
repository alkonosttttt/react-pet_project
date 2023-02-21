import React from "react";
import s from "./profileInfo.module.css"

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://miro.medium.com/max/2880/1*ydcB-SmmYa4Zy5bmOizZlw.png' alt="back_photo"
                     className={s.back_photo}/>
            </div>
            <div className={s.info}>
                ava + description
            </div>
        </div>

    )
}

export default ProfileInfo;