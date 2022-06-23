import React from 'react'
import { NavLink } from 'react-router-dom'
import './Admin.css'
import axios from 'axios';

import { useNavigate } from "react-router-dom";
import {url} from "./url"
import logo from '../asserts/Delete.png' ;
export default function Table(props) {
    const navigate = useNavigate()
  const gotoViolence = (e) =>{
e.preventDefault()
        navigate("/violence");

  }
  const DeleteUser = (id)=>{
    axios.request({
        method: 'DELETE',
        url: url+`/user`,
       
        data: {
          id: id
        },
    }).then(res=>{
        window.location.reload()
        console.log("Api hit")
    }).catch(err=>{
        console.log("Error is : ",err);
    })

  }
  
    return (
      
<div class="container table-responsive py-5"> 
<h3>Digital Traffic Warden</h3>
<h5>Users</h5>
<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">CNIC</th>
      <th scope="col"></th>    
      
    </tr>
  </thead>
  <tbody>
    {
        props.data.map((dt,index)=>(
             <tr
               
            >
              <th scope="row" >{index+1}</th>
              <td >{dt.Name}</td>

            <td >{dt.Email}</td>

              <td >{dt.CNIC}</td>
              

              <td><button className='deleteButton' onClick={()=>{DeleteUser(dt._id)}} >Delete</button></td>
              {/* <td><img className='deleteButton' src={logo} alt="Delete"  onClick={()=>{DeleteUser(dt._id)}} /></td> */}
            </tr>
        ))
    }

  </tbody>
</table>
</div>

  )
}
