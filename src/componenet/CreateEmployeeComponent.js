import React from 'react'
import axios from 'axios' ;
import { useState} from 'react';
export default function CreateEmployeeComponent() {
    const [firstName,setFirstName]=  useState(null);
    const [lastName,setLastName]=  useState(null);
    const [emailId,setEmailId]=  useState(null);
    
    function addEmployee(){
        axios.post("http://localhost:8080/api/v1/employees",
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
function handleClickSave() {
    window.location.href = '/';
  }
  return (
    <div>
    <div className='container'>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h3 className='text-center'>Add Employee</h3>
                <div className='card-body'>
                    <form onSubmit={(e)=>{e.preventDefault();addEmployee();}}>
                        <div className='form-group'>
                            <label>firstName: </label>
                            <input placeholder='First Name' name='firstName' className='form-control'
                             onChange={(e)=>setFirstName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>LastName: </label>
                            <input placeholder='Last Name' name='lastName' className='form-control'
                             onChange={(e)=>setLastName(e.target.value)} />
                        </div>
                        <div className='form-group'>
                            <label>Email Address: </label>
                            <input placeholder='Email Address' name='emailId' className='form-control'
                             onChange={(e)=>setEmailId(e.target.value)} />
                        </div>
                        <div>
                            <button className='btn btn-success' type="submit" onClick={handleClickSave}>Save</button>
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

