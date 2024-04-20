import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const users = useLoaderData();
    console.log(users);
    const handleDelete = (id) =>{
        console.log(id);

        fetch(`http://localhost:5000/users/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert("user deleted form the database ")
            }
        })
    }
    return (
        <div>
            <h1>All users UI is here</h1>
            <h1>Total users : {users.length}</h1>
            {
                users.map(user => <p key={user.id}>{user.name} : {user.email} <button onClick={() => handleDelete(user._id)}>X</button></p>) 
            }
        </div>
    );
};

export default Users;