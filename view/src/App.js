import Login from "./components/Login";
import React ,{useState} from 'react';
import {BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Register from "./components/Register";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Error from "./components/Error";
import CreateForm from "./components/userContent/CreateForm";
import TotalForm from "./components/userContent/TotalForm";
import FeeSlip from "./components/userContent/FeeSlip";
import ShowForm from "./components/userContent/ShowForm";
import ForgetPassword from "./components/ForgetPassword";
import UserList from "./components/adminContent/UserList";
import UserVerification from "./components/adminContent/UserVerification";
import UserStatus from "./components/adminContent/UserStatus";
import { NotificationContainer } from "react-notifications";
import 'react-notifications/lib/notifications.css';
import Example from "./FirstBootstrap";
// import Button from  'react-bootstrap/Button';

import AdminHome from "./components/AdminPanel/Home";
import AdminNav from "./components/AdminPanel/Navbar";
// import UserList from "./components/AdminPanel/UserList";


function App() {

  // const [modalShow, setModalShow] = useState(false);


  const userRoutes =  [
    {
      path:"/",
      component:Home
    }
  ]

  const AdminRoutes = [
    {
      path:'/admin',
      componet:<AdminHome/>
    },
    {
      path:'/user/list',
      componet:<UserList/>
    },
  ]


 return (
    <div className="container">
      <NotificationContainer/>
      <Router>
        {/* <Nav/> */}
        <AdminNav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/createForm" element={<CreateForm/>}/>
          <Route path="/totalForm" element={<TotalForm/>}/>
          <Route path="/feeSlip" element={<FeeSlip/>}/>
          <Route path="/showForm" element={<ShowForm/>}/>
          <Route path="/forgetPassword" element={<ForgetPassword/>}/>
          <Route path="/user" element={<UserList/>}/>
          <Route path="/userVerification" element={<UserVerification/>}/>
          <Route path="/userStatus" element={<UserStatus/>}/>


          {/* Admin Panel */}
            {
              AdminRoutes.map((e)=>{
                return(
                  <Route path={e.path} element={e.componet}/>
                )
              })
            }
          {/* Admin Panel */}

          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
