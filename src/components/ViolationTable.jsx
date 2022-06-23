import React from 'react'
import { NavLink } from 'react-router-dom'
import './Admin.css'
import { useNavigate } from "react-router-dom";
import {url} from "./url"
import axios from 'axios';

const DeleteUser = (id)=>{
  axios.request({
      method: 'DELETE',
      url: url+`/video`,
     
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


export default function ViolationTable(props) {
    const navigate = useNavigate()
  const gotoViolence = (e) =>{
    e.preventDefault()    
    navigate("/seecurrent");

  }
  const seeViolation = (id)=>{
    axios.request({
        method: 'PUT',
        url: url+`/video/isreadfalse`,
       
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
  const Reprocessvedio = (id)=>{
    axios.request({
        method: 'PUT',
        url: url+`/video/reprocessvedio`,
       
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
<h5>Archived Violations</h5>

<table class="table table-bordered table-hover">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">CNIC</th>
      <th scope="col">Date</th>
      <th scope="col">Time</th>
      <th scope="col">Status</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>


      
      
    </tr>
  </thead>
  <tbody>
    {
        props.data.map((dt,index)=>(
             <tr 
            >
              <th scope="row" 
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }} >{index+1}</th>
              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.user.Name}</td>

              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.user.Email}</td>


              <td 
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}> {dt.user.CNIC}</td>
              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.Date}</td>
              <td  
             onClick={(e)=>{
                props.setDataindex(index)
                gotoViolence(e)


             }}>{dt.Time}</td>

<td onClick={(e)=>{props.setDataindex(index)
                gotoViolence(e)
               
            }}>{dt.status}</td>

              <td><button className='button2' onClick={()=>{seeViolation(dt._id)}} >UnArchived</button></td>
              <td><button className='button2' onClick={()=>{Reprocessvedio(dt._id)}} >Reprocess</button></td>
              <td><button className='deleteButton' onClick={()=>{DeleteUser(dt._id)}} >Delete</button></td>
            </tr>
        ))
    }

  </tbody>
</table>
</div>

  )
}
