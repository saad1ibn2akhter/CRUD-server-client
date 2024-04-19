import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const handleSubmit = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const user ={name ,email};

    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res =>res.json())
    .then(data => {
      console.log('data from the fetch in the form : ' ,data); 
      if(data.insertedId) {
        alert(`User inserted , ID : ${data.insertedId}`);

      }
    } )
  } 

  return (
    <>
    <div>
      <h1>Simple Crud server client operation part</h1>
      <form onSubmit={handleSubmit}>

        <input type="name" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="submit" name="" id="" />
        
      </form>
    </div>
    </>
  )
}

export default App
