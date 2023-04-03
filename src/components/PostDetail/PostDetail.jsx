import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const post = useLoaderData()
   const {id, title, useId, body} =post;

   const navigate = useNavigate();
   const navigateHandlerGoBack =()=>{
    navigate(-1);
   }
    return (
        <div>
            <h1>details about your post of: {id}</h1>
            <h4>{title}</h4>
            <p>
                <small>{body}</small>
            </p>
            <button onClick={navigateHandlerGoBack}>go back</button>
        </div>
    );
};

export default PostDetail;