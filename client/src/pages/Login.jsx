import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
   e.preventDefault();
   const email=e.target.email.value;
   const password=e.target.password.value;
   if(!email || !password){
    alert("All fields required");
   }
   if(email=="admin@gmail.com" && password=="manager"){
    alert("Login successfully");
    navigate("/viewuser",{ state: { uname: email } })
   }
   else{
    alert("Login Failed");
    navigate("/")
   }
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit} >
  <div class="mb-3">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>   
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Login</button>
</form>
    </div>
  )
}

export default Login
