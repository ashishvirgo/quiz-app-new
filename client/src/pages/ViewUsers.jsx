import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate,useLocation,Link} from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from "axios"
const ViewUsers = () => {
  const location = useLocation();
  const API_URL=import.meta.env.VITE_API_URL;
  const uname = location.state?.uname || "Guest";
    const navigate=useNavigate();
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        loadusers();
    },[])
    const loadusers=async()=>{
     const resp=await axios.get(`${API_URL}/users`);
     setUsers(resp.data);
    }
    const handleEdit=async(email)=>{
      // await axios.put(`http://localhost:3001/edituser/${email}`);
      navigate(`/edituser/${email}`)
    }
    const handleDelete=async(email)=>{
      await axios.delete(`${API_URL}/deleteuser/${email}`);
      alert("user deleted successfully")
      loadusers();
    }
    const handleadd=()=>{
     navigate('/adduser')
    }
  return (
    <div>
        <Header/>
        {/* <Navbar/> */}
        <div className='navbar'>
          Welcome {uname}
          {new Date().toLocaleString()}
          <Link to="/changepassword">Change password</Link>
          <Link to="/logout">Logout</Link>

        </div>
        <div className='content'>
        
      <h1>List of Users</h1>
      <button onClick={handleadd}>Add User</button>
      <div style={{ overflowY: 'auto', maxHeight: '50vh' }}>
      <table width="95%">
        <thead>
            <tr>
                <th>Sr No.</th>
                <th>Name</th>
                <th>Email</th>
                {/* <th>Password</th> */}
                <th colspan="2">Action</th>
            </tr>
        </thead>
        <tbody>
            {
                users.map((user,index)=>(
                  <tr key={user.email}>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    {/* <td>{(user.password).substring(50,60)}</td> */}
                    <td><button onClick={()=>handleEdit(user.email)}>EDIT</button></td>
                    <td><button onClick={()=>handleDelete(user.email)}>DELETE</button></td>
                    
                  </tr>  
                ))
            }
        </tbody>
      </table>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default ViewUsers
