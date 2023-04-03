import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>all Post are here {posts.length}</h2>
            <div>
            {
                posts.map(post => <Post 
                    post = {post}
                    key={post.id}
                ></Post>)
            }
            </div>
        </div>
    );
};

export default Posts;