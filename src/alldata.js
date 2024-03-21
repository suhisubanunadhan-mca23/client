// import userContext from "./context.js"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import { useContext } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css'
// export default function Alldata(){
//  const ctx=useContext(userContext)

 
    

 
//    return(
//     <>
//     <h2>Bank Users Database</h2>
//    {
//  ctx.users.map((item)=>
   
//  <table id="table" class="table table-dark table-hover">
//  <thead>
//   <tr>
//   <th scope="col">Field</th>
//   <th scope="col">Values</th>
   
//    </tr>
// </thead>
// <tbody>
//   <tr >
//     <td>USER ID</td>
//     <td >{item.id}</td>
//   </tr>
//   <tr >
//     <td>NAME</td>
//     <td>{item.name}</td>
//   </tr>
//   <tr >
//     <td>EMAIL</td>
//     <td>{item.email}</td>
//   </tr>
//   <tr >
//     <td>PASSWORD</td>
//     <td>{item.password}</td>
//   </tr>
//   <tr>
//     <td>BALANCE</td>
//     <td>{item.amount}</td>
//   </tr>
//   </tbody>
// </table>)
//    }
     
//   </>
//     )
    
    
//     }

import {useState,useEffect} from "react";
import axios from 'axios'
import {Table,Button} from 'react-bootstrap'


export default function Alldata(){
  
  const [data,setData]=useState([])
 

  useEffect(()=>{
    const fetchdata=async()=>{
       await axios.get('https://server-1-zsen.onrender.com/data').then((item)=>{setData(item.data)})
    };fetchdata()
 },[]);
   
  function handleDelete(index){
    let DeleteArray=[...data];
    axios.delete(`https://server-1-zsen.onrender.com/delete/${DeleteArray[index]._id}`);
    alert(`Account ${DeleteArray[index].id} Delete from Database` )
    DeleteArray.splice(index,1);
    setData(DeleteArray);
    
    
  }
  return(
    <>
      <h2>Bank Users Database</h2>
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>AccountNo</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
          <th>Balance</th>
          <th>Delete-Option</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item,index)=>  
          <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.password}</td>
          <td>{item.amount}</td>
          <td><Button onClick={()=>handleDelete(index)}>Delete</Button></td>
        </tr>)
        }
      
        </tbody>
        </Table>
    
    </>
  )
}
