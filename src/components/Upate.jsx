import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Upate = () => {
    const loadedUser = useLoaderData();

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const updatedUser = { name, email };
        
        console.log(loadedUser)
        console.log(updatedUser);

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <div>
            <h2>Update information of {loadedUser.name}</h2>
            <form action="" onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser.name} id="" /><br />
                <input type="email" name="email" id="" defaultValue={loadedUser.email} /><br />
                <input type="submit" value="Update Information" />
            </form>
        </div>
    );
};

export default Upate;