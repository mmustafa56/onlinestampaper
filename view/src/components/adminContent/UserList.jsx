import React, { useState,useEffect } from 'react';
import {NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from 'react-router-dom';
 const UserList = () => {
   const [users,setUsers] = useState([]);
   const [seletcted,setseletcted] = useState({});
   const [show, setShow] = useState(false);
   const [formDetail, setFormDtail] = useState(false);
   const Navigate = useNavigate();
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const formClose = () => setFormDtail(false);
   const formShow = () => setFormDtail(true);


   const Accept = (id) =>{
    axios.put('http://localhost:9000/api/admin/get/user/'+id)
    .then((res)=>{
     console.log(res)
     NotificationManager.success(`Accepted Succesfully`,"Notification",3000)
    })
    .catch((error)=>{
     console.log(error)
     NotificationManager.error (`Some thing went wrong`,"Error",3000)
    })
   }
   const Delete = (id) =>{
    axios.delete('http://localhost:9000/api/admin/get/user/'+id)
    .then((res)=>{
     console.log(res)
     NotificationManager.success(`Accepted Succesfully`,"Notification",3000)
    })
    .catch((error)=>{
     console.log(error)
     NotificationManager.error (`Some thing went wrong`,"Error",3000)
    })
   }
  
   useEffect(()=>{
    axios.get('http://localhost:9000/api/admin/get/user')
         .then((res)=>{
          console.log(res)
           setUsers(res.data.data)
         })
         .catch((error)=>{
          console.log(error)
          
         })

   }, [])

    
   
 
  return (<div className='container border border-dark'>
          <div className="row">
            <div className="col-sm-12">
            <table className="table">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>States</th>
                </tr>
              </thead>
              <tbody>
                  {users? users.map((user)=>{
                      return <tr onClick={()=>{
                        setseletcted(user)
                        handleShow()
                      }}>
                            <td>{user._id}</td>
                            <td>{user.first_name+" "+user.last_name}</td>
                            <td>{user.contact}</td>
                            <td>
                              <button className='btn btn-primary'>Verifyed</button>
                            </td>
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
              <label htmlFor="uname" className='col-6'>Name</label>
              <label htmlFor="uname" className='col-6'>
                {seletcted.first_name+" "+seletcted.last_name}
              </label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="id"  className='col-6'>ID</label>
              <label htmlFor="id"  className='col-4'>
                {seletcted._id}
              </label>
              
             </div>

             <div className='py-3' >
              <label htmlFor="contact"  className='col-6'>Contact</label>
              <label htmlFor="contact"  className='col-6'>
                {seletcted.contact}
              </label>
              
             </div>

             <div className='text-center mt-5' >
               {

                seletcted.verify ?  
                <Button onClick={()=>{}} className="col-4 fw-bolder mx-2">
                   Accepted
                </Button>
                :<>
                <Button onClick={()=>{
                  Accept(seletcted._id)
                 }} className="col-4 fw-bolder mx-2 btn btn-success">
                     Accept
                </Button>
                 <Button onClick={()=>{
                  Delete(seletcted._id)
                 }} className="col-4 fw-bolder mx-2 btn btn-danger">
                     Delete
                </Button>
                </>
               }
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
