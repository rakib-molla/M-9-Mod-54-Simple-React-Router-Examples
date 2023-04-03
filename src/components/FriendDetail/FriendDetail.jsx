import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetail = () => {

    const friend = useLoaderData();

    const navigate = useNavigate();
    const handleGoBack =()=>{
        navigate(-1);
    }
    return (
        <div>
            <h1>everything about this person is here</h1>
            <h1>Name: {friend.name}</h1>
            <h3>Phone: {friend.phone}</h3>
            <button onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default FriendDetail;