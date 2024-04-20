import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    
    const users = useLoaderData();
    const [datas ,setDatas] = useState(users);

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
                alert("user deleted form the database ");
                const remaining = datas.filter(user => user.id == id);
                setDatas(remaining);
            }
        })
    }
    return (
        <div>
            <h1>All users UI is here</h1>
            <h1>Total users : {datas.length}</h1>
            {
                datas.map(user => <p key={user.id}>{user.name} : {user.email} <Link to={`/Update/${user._id}`}> <button>Update</button></Link> <button onClick={() => handleDelete(user._id)}>X</button></p>) 
            }
        </div>
    );
};

export default Users;