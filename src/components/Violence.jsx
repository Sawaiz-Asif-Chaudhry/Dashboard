import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import fetch from "node-fetch";
import { url } from "./url"
export default function Violence(props) {
  const hist = useNavigate();

  const GoBack = () => {
    // axios.request({
    //   method: 'PUT',
    //   url: `http://localhost:3050/video/isreadtrue`,

    //   data: {
    //     id: props.data._id
    //   },

    // })
    hist(-1)
  }



  // useEffect(async () => {
  //   console.log("i am in get", props.data._id)


  // }, []);  

  // await axios.put("http://localhost:3050/video/isreadtrue", {
  //       data:{
  //         id:props.data._id
  //       }
  //      }).then(res =>{  
  //         // SetRow1(res.data);
  //         return   
  //   }).catch(err=>{
  //     console.log("Error : ",err);
  //   })


  return (







    <div className="container-fluid ">
      <button onClick={() => GoBack()} className="button">
        Go Back
      </button>
      <nav className="tablenav c  ontainer-fluid">
        <h5>Digital Traffic Warden</h5>
      </nav>

      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{ borderRight: "1px solid #37474f", textAlign: 'left' }}
          >
            <h1 style={{ textAlign: 'center' }}>Information </h1>

            <p style={{ position: 'relative' }}>
              <span >Date :</span> {props.data.Date}
              <span style={{ marginLeft: '40%' }}>Time :</span> {props.data.Time}
            </p>
            <p>
              {" "}
              <span>Name :</span> {props.data.user.Name}
            </p>
            <p>
              <span>Email :</span> {props.data.user.Email}
            </p>
            <p>
              <span>PhoneNumber :</span> {props.data.user.Mobile}
            </p>
            <p style={{ position: 'relative' }}>
              <span >CNIC :</span> {props.data.user.CNIC}
              <span style={{ marginLeft: '25%' }}>PhoneNumber :</span> {props.data.user.Mobile}
            </p>


            <p style={{ position: 'relative' }}>
              <span >Request Type :</span> {props.data.Option}
              <span style={{ marginLeft: '40%' }}>Status :</span> {props.data.status}
            </p>

          </div>

          {(props.data.status == "Pending") ? <div className="col-md-6">
            <video width="620" height="360" controls>
              <source src={url + `/Vedio/` + props.data.videoPath} type="video/mp4" />
            </video>
          </div>:<div className="col-md-6">
            <video width="620" height="360" controls>
            <source src={url + `/Vedio/` + props.data.videoPath} type="video/mp4" />
            </video>
          </div>
          }    
          
        
        
        </div>
      </div>

      {(props.data.status == "Pending") ? <div></div> : <div><div className="container text-center" style={{ marginTop: "10px" }}>
        <h5>Number Plates</h5>
        <div className="row">

          {

            (props.data.numberPlatesImg.length > 0) ? props.data.numberPlatesImg.map((image , index)=> <div className="col-md-4 imagecontainer mx-auto">
              {`Detected Number : ${props.data.detectednumbers[index]}`}
              <img src={url + `/numberPlate/` + image} alt="" width={300} height={200} />
            </div>) : <div>No Number Plate Found</div>
          }

        </div>


      </div><div className="container text-center" style={{ marginTop: "100px" }}>
          <h5>Violations</h5>
          <div className="row">

            {
              props.data.offendersImg.map((image,index) => (
                <div className="col-md-4 imagecontainer mx-auto">
                  {`Object Number : ${props.data.detectednumbers[index]}`}
                  <img src={url + `/object/` + image} alt="" width={300} height={200} />
                </div>

              ))
            }
          </div>
        </div></div>}




    </div>
  );
}
