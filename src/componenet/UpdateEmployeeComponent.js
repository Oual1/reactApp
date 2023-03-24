import React from 'react'
import axios from 'axios' ;
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
export default function UpdateEmployeeComponent() {
    const [firstName,setFirstName]=  useState('');
    const [lastName,setLastName]=  useState('');
    const [emailId,setEmailId]=  useState('');
    const [emplyoee, setEmployee]=  useState({id:0});
    const {id}=useParams();

    
    function updateEmployee(){
        axios.put(`http://localhost:8080/api/v1/employees/${id}`,
        {firstName:firstName,
        lastName:lastName,
        emailId:emailId
                
              })

.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
});}
function getById(){
  axios.get(`http://localhost:8080/api/v1/employees/${id}`)

  .then(function (response) {
   
    setEmployee(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });}
  useEffect(()=>{
    getById()
    
    },[]
)


function handleClickSubmit() {
    window.location.href = '/';
  }
  return (
    <div>
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Update Employee</h3>
                <div className='card-body'>
                    <form onSubmit={(e)=>{e.preventDefault();updateEmployee();}}>
                        <div className='form-group'>
                            <label>FirstName: </label>
                            <input type="text" name='firstName' className='form-control' defaultValue={emplyoee.firstName ?? ''}
                             onChange={(e)=>setFirstName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>LastName : </label>
                            <input type="text" name='lastName' className='form-control' defaultValue={emplyoee.lastName ?? ''}
                             onChange={(e)=>setLastName(e.target.value)}  />
                        </div>
                        <div className='form-group'>
                            <label>Email Address : </label>
                            <input type="text" name='emailId' className='form-control' defaultValue={emplyoee.emailId ?? ''}
                             onChange={(e)=>setEmailId(e.target.value)} />
                        </div>
                        <div>
                          <button className='btn btn-success' type="submit" onClick={handleClickSubmit}>Update</button>
                          <button className='btn btn-danger' style={{marginLeft:"10px"}}>Cancel</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    </div>
    
</div>
  )
  }
