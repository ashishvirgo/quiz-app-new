import React from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom'
const AddUser = () => {
  const navigate=useNavigate();
  const handleAddUser=(e)=>{
     e.preventDefault();
     const name=e.target.uname.value;
     const email=e.target.uemail.value;
     const password=e.target.upass.value;
     try{
      if(!name || !email || !password){
       return alert("All fields Required")
      }
        axios.post("http://localhost:3001/createuser",{name,email,password})
        alert("user created successfully");
        navigate("/viewuser")
     }
     catch(err)
     {
      console.error('Error creating user:', err.message);
      alert('Failed to create user. Please try again.');
     }

  }
  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleAddUser}>
      <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" name="uname"id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>       
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" name="uemail" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" name="upass" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default AddUser
