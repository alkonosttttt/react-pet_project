import React from 'react';
import s from './myposts.module.css'
import Post from "./post/post";

const MyPosts = (props) => {
    let postsElements = props.postsData.map( posts => {
        return (
        <Post text={posts.text} id={posts.id} likesCount={posts.likesCount} />
        )
    })
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
            {postsElements}
        </div>
    );
}


export default MyPosts;
