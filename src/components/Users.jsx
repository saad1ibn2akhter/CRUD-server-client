import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h1>All users UI is here</h1>
            <h1>Total users : {users.length}</h1>
            {
                users.map(user => <p key={user.id}>{user.name} : {user.email}</p>) 
            }
        </div>
    );
};

export default Users;