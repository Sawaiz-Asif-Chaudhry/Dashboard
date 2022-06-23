import React, { useLayoutEffect } from 'react'
import './Admin.css';
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';

export default function CurrentViolation(props) {
    const [data,setdata] = useState([])


  return (
    <div id="viewport">
  <div id="sidebar">
    <header>
      <a >Logo</a>
    </header>
    <ul className="nav">
    <Link className='link' to = "/Users"><li>
        <a style={{color:"white"}}>
            Users
        </a>
      </li></Link>
    <Link className='link' to = "/adminpanal"><li>
        <a style={{color:"white"}}>
            Current Violations
        </a>
      </li></Link>
      <Link className='link' to = "/currentviolations"><li>
        <a style={{color:"white"}}>
            Archived Violations
        </a>
      </li></Link>
    </ul>
  </div>
  <div id="content">
        <props.Table data = {props.data} setDataindex = {props.setDataindex} 
        />
  </div>
</div>
  )
}
