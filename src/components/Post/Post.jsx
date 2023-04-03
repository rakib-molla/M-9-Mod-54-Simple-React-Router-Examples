import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    
    const {id, title, body} = post;

    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate(`/post/${id}`)
    }

    return (
        <div className='post'>
            <h1>id:{id}</h1>
            <h1>{title}</h1>
            <Link to={`/post/${id}`}> show Detials</Link>
            <Link to={`/post/${id}`}><button>Show post details</button></Link>
            <button onClick={handleNavigation}>with button handler</button>
        </div>
    );
};

export default Post;