import axios from 'axios' ;
import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const EMPLOYEE_API_URL="http://localhost:8080/api/v1/employees";
export default function ListEmployeeComponent() {
    const [Employees,setEmployees]=  useState(null);

    const deleteEmployee=async(id)=>{
      try {
        await axios.delete(`http://localhost:8080/api/v1/employees/${id}`).then(res =>{
          Employees= Employees.filter(item => item.id !==id);
          setEmployees(Employees);
          alert("Employee deleted successfully !");


        })
        
      } catch (error) {
        console.log(error);
        
      }
      Show()
    };
    const Show=()=>{
      axios.get("http://localhost:8080/api/v1/employees").then(response =>{
        const Employees= response.data;
        setEmployees(Employees)
      })
    }
    function EmployeeList(){
        axios.get(EMPLOYEE_API_URL).then(
            response =>{
                const employees= response.data;
                setEmployees(employees);
                
                
            })
    }
    
    function handleClick() {
        window.location.href = '/add-employee';
      }
    
    useEffect(()=>{
        EmployeeList()
        
    },[]
    )
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          
         
        },
        {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 150,
          
        },
        {
          field: 'actions',
          headerName: 'Actions',
          width: 150,
          renderCell:(params)=>{
            return(
              <div>
                <a href={'/update-employee/'+`${params.row.id}`} ><EditIcon style={{Color:'#444'}}/></a>
                <a onClick={(e)=>{deleteEmployee(params.id,e)}}> <DeleteIcon style={{Color:'#444'}}/> </a>
              </div>
            )
          }
        },

       ];
      console.log(Employees);
      
      const rows =Employees ? Employees?.map((e)=>{
        
        return{
     id: e.id,
    lastName: e.lastName,
    firstName: e.firstName,
    email:e.emailId 
        }}):[];
       
    
        
       
      
      
  return (
 


<div style={{marginTop:50}}>
    <button onClick={handleClick} class="btn btn-primary mb-2" >Add Employee</button>
    

    <Box sx={{ height: 400, width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 4,
            },
          },
        }}
        pageSizeOptions={[4]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box></div>
  );
}

  


