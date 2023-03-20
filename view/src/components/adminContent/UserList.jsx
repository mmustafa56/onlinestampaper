import React, { useState,useEffect } from 'react';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
 const UserList = () => {
   const [users,setUsers] = useState([{idNumber:"234567",contact:"234567",firstName:"GHAYAS",lastName:"Ud Din"}]);
   const [show, setShow] = useState(false);
   const [formDetail, setFormDtail] = useState(false);
   const Navigate = useNavigate();
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const formClose = () => setFormDtail(false);
   const formShow = () => setFormDtail(true);
   const [name,setName] = useState();
   const [id,setID] = useState();
   const [contact,setContact] = useState();
   const [amount,setAmount] = useState();
  
   useEffect(()=>{
    axios.get('http://localhost:5000/api/user')
         .then((res)=>{
              setUsers(res.data)
         })
         .catch((error)=>{
          console.log(error)
         })

   }, [])

    
   
 
  return (<div className='container border border-dark'>
          <div className="row">
            <div className="col-sm-12">
            <table class="table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                </tr>
              </thead>
              <tbody>
                  {users? users.map((user)=>{
                           return <tr onClick={handleShow}>
                                 <td>{user.idNumber}</td>
                                 <td>{user.firstName+" "+user.lastName}</td>
                                 <td>{user.contact}</td>
                           </tr>
                   } ):<p className='text-center fs-2 fw-bolder'>No user</p>}
              </tbody>
            </table>
            </div>
          </div>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        centered
      >
        <Modal.Body className='p-5 bg-light rounded '>
             <div className='py-3' >
              <label htmlFor="uname" className='col-4'>Name</label>
              <label htmlFor="uname" className='col-4'>GHAYAS</label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="id"  className='col-4'>ID</label>
              <label htmlFor="id"  className='col-4'>234567894567</label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="contact"  className='col-4'>Contact</label>
              <label htmlFor="contact"  className='col-4'>03543524531</label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="totalForm"  className='col-4'>Total Form</label>
              <button className='btn btn-outline-primary col-3 mx-5 fw-bold rounded-pill' onClick={formShow}>Show</button>
             </div>
             <div className='text-center mt-5' >
               <Button onClick={()=>{
                NotificationManager.success(`Accepted Succesfully`,"Notification",3000)
               }} className="col-4 fw-bolder mx-2">
                   Accept
              </Button>
               <Button onClick={()=>{}} className="col-4 fw-bolder mx-2">
                   Reject
              </Button>

              {/* <Button onClick={()=>{}} className="col-4 fw-bolder mx-2">
                   Accepted
              </Button> */}
             </div>

        </Modal.Body>
      </Modal>
    {/*  This is the show form Modal  */}
      <Modal
        show={formDetail}
        onHide={formClose}
        keyboard={false}
        size="sm"
      >
        <Modal.Body className='bg-light border border-dark border-1 rounded shadow'>
          <h4 className='text-center my-4 text-primary'>
          <i class="bi bi-chevron-double-left fw-bold mx-1"></i>
            Form Detail</h4>
          <p className='col-12'>
            Serial No....................................................
          </p>
        </Modal.Body>
      </Modal>

 </div>)
}

export default UserList;
