import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends, setfriends] = useState([]);
    useEffect(()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data =>setfriends(data))
    },[])
    return (
        <div>
            <h1>Friends Page. Number of Friends: {friends.length}</h1>
            {
                friends.map( friend => <Friend
                key={friend.id}
                friend={friend}
                
                ></Friend>)
            }
        </div>
    );
};

export default Friends;