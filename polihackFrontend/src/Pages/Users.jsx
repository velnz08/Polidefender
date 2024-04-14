import React, { useEffect } from "react";
import axios from "axios";
import Button from "@mui/material/Button"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
export const Users = () => {
    const [rows,setRows] = React.useState([])
    const [enable,setEnable] = React.useState(false);
    function createData(ID, City, Name, Username, Email,Password) {
        return { ID, City, Name, Username, Email,Password };
      }

      useEffect ( () => 
      {   
        console.log(rows);
       // if(rows != null)
         //   {setEnable(true);}
      },[rows])
     const getAllUsers = () => {
        try {
           axios.get("http://192.168.35.185:8080/User/GetData",{}).then((response) => {
            const {data, status} = response;
            setRows(data);
        });
        } catch(error){
            console.log(error);
        }
     }
    
    return <div>
        <Button style = {{backgroundColor : '#1E90FF'}} onClick = {getAllUsers}> GetUsers </Button>
        <TableContainer >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Password</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell >{row.id}</TableCell>
              <TableCell >{row.city}</TableCell>
              <TableCell >{row.firstName + " " + row.lastName}</TableCell>
              <TableCell >{row.username}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.password}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
}