import React from 'react';
import s from './myposts.module.css'
import Post from "./post/post";

const MyPosts = () => {
    let postsData = [
        {id:1, text:"Hello", likesCount:2},
        {id:1, text:"How are you?", likesCount:4}
    ]
    return (
        <div>
            <p className={s.title}>My Posts</p>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Publish</button>
                </div>
            </div>
            <Post text={postsData[0].text} id={postsData[0].id} likesCount={postsData[0].likesCount} />
            <Post text={postsData[1].text} id={postsData[1].id} likesCount={postsData[1].likesCount} />
        </div>
    );
}


export default MyPosts;
