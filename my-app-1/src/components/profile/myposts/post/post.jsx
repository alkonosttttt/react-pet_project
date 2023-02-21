import React from "react";
import s from './post.module.css'

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src={'ava.png'} alt="ava"/>
                <div>
                    <p>{props.text}</p>
                </div>
                <div>
                    <p>Likes: {props.likesCount}</p>
                </div>
            </div>
        </div>
    );
}

export default Post;