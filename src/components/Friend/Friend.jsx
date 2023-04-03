import React from 'react';
import './Friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    
    const {email, name, id, phone} = friend;
    return (
        <div className='friend'>
            <h1>{name}</h1>
            <p>email: {email}</p>
            <p>Phone:{phone}</p>
            <p>
                <Link to={`/friend/${id}`}>show me details</Link>
            </p>
        </div>
    );
};

export default Friend;