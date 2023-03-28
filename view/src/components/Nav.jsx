import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from './Images/logo.jpeg';

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////

//////////////GET REDUX//////////////
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
///////////////GET REDUX//////////////


 const Nav = () => {
      const nv  = useNavigate()
      /////////////SET REDUX//////////////
      const dispatch = useDispatch()
      const action = bindActionCreators(actionCreator, dispatch)
      /////////////SET REDUX//////////////
  
      /////////////GET REDUX//////////////
      const state = useSelector((state) => state.LogIn)
      /////////////GET REDUX//////////////

  return (
    <div className='container border border-primary bg-light rounded-top'>
      <nav class="navbar navbar-expand-lg ">
        <Link class="navbar-brand fs-4 fw-bolder" to={'/'}>
            <img src={logo} alt="This is Stamp logo" className='img-fluid w-100 h-75' />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#userMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="userMenu">
            <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-3">
                <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/createForm'}>Create Form</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3" to={'/totalForm'}>Total Form</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3 px-3" to={'/feeSlip'} id="navbarDropdown" >Fee Slip </Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3 " to={'/showForm'}>Show Form</Link>
            </li>
            <li class="nav-item mx-1">
                  <button className='btn btn-danger' onClick={()=>{
                    action.LogOut()
                    nv('/login')
                  }}>LogOut</button>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}
export default Nav;
