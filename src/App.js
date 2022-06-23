import logo from "./logo.svg";
import "./App.css";
import AdminDashboard from "./components/AdminDashboard";
import Login from "./components/Login"
import Table from "./components/Table";
import { BrowserRouter as Router, Switch,Routes, Route, Link } from "react-router-dom";

import Violence from "./components/Violence";
import CurrentViolation from './components/CurrentViolations'
import Users from './components/Users'

import { useState,useEffect } from "react";

import ViolationTable from "./components/ViolationTable";
import Current from "./components/Current";
import {url} from "./components/url"
import axios from 'axios';

function App() {

  const [index, setindex] = useState(0);
  const [data, setdata] = useState([]);
  const [currindex, setcurrindex] = useState(0);
  const [currentdata, setdata2] = useState([]);

  const [userdata,setuserdata] = useState([])

  // fetch("http://localhost:3050/user").then(res=>res.json().then(result=>{
  //   data=result;
  // }))
  useEffect(async () => {
    
    console.log("i am in get")
    const retres =await axios.get(url+`/video/unseen`, {
        }).then(res =>{  
            
            // SetRow1(res.data);
            
            console.log("Data is : ", res);
            setdata(res.data)
            return res
      })
      
}, []); 

// Current Violation
useEffect(async () => {
  console.log("i am in get")
  const retres =await axios.get(url+"/video/seen", {
      }).then(res =>{  
          
          // SetRow1(res.data);
          
          
          setdata2(res.data)
          console.log("For checking po : ", currentdata);
          return res
    })
    
}, []);

//Current Users
useEffect(async () => {
  console.log("i am in get")
  const retres =await axios.get(url+"/user", {
      }).then(res =>{  
          
          // SetRow1(res.data);
          
          console.log("Data is : ", res);
          setuserdata(res.data)
          return res
    })
    
}, []);

//   console.log(data)
  // const data = [
  //   {
  //     username: "Sawaiz Asif",
  //     email: "sawaiz@gmail.com ",
  //     video: "from DB",
  //     violation: "Signal Break",
  //   },
  //   {
  //     username: "Naveed Ahmed",
  //     email: "naveed@gmail.com ",
  //     video: "from DB",
  //     violation: "One Wheeling  ",
  //   },
  // ];
  const [currentViolation , setcurrent] =useState()
  const setDataindex = (index) => {
    setindex(index);
    console.log("Index is ", index);
   
  };
  return (
    <div className="App">
      <Routes>
      <Route
            exact
            path="/"
            element={
              
              <Login
              />
            }
          />

          <Route
            exact
            path="/adminpanal"
            element={
              
              <AdminDashboard
                
                Table={Table}
                data={data}
                setDataindex={setDataindex}
              />
            }
          />
          <Route
            exact
            path="/currentviolations"
            element={
              <CurrentViolation
                Table={ViolationTable}
                data={currentdata}
                setDataindex={setcurrindex}
              />
            }
          />

            <Route
            exact
            path="/Users"
            element={
              <CurrentViolation
                Table={Users}
                data={userdata}
                setDataindex={setcurrindex}
              />
            }
          />



          <Route
            exact
            path="/violence"
            element={<Violence data={data[index]} />}
          />
          <Route
            exact
            path="/seecurrent"
            element={<Current data={currentdata[currindex]} />}
          />
          </Routes>
          <nav className="footer">
          
          </nav>
      </div>
  );
}

export default App;
