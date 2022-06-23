import React from 'react'
import './Admin.css';
import {url} from "./url"
import { Link } from 'react-router-dom';
export default function AdminDashboard(props) {
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
        <props.Table data = {props.data} setDataindex = {props.setDataindex}/>
  </div>
</div>
  )
}
