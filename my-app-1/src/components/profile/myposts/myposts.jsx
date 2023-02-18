import React from 'react';
import s from './myposts.module.css'
import Post from "./post/post";

const MyPosts = () => {
    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <textarea>

                </textarea>
                <button>Publish</button>
            </div>
            <Post text='Hello!'/>
            <Post text='How are you?'/>
        </div>
    );
}


export default MyPosts;
