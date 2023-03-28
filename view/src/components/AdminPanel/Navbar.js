import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logo from '../Images/logo.jpeg';

/////////////SET REDUX//////////////
import { useDispatch } from 'react-redux';
import * as actionCreator from "../../state/Action/action"
import { bindActionCreators } from 'redux';
///////////////SET REDUX//////////////


 const Nav = () => {

   /////////////SET REDUX//////////////
   const dispatch = useDispatch()
   const action = bindActionCreators(actionCreator, dispatch)
   /////////////SET REDUX//////////////


   const nv = useNavigate()



  return (
    <div className='container border border-primary bg-light rounded-top'>
      <nav class="navbar navbar-expand-lg ">
        <Link class="navbar-brand fs-4 fw-bolder" to={'/'}>
            <img src={logo} alt="This is Stamp logo" className='img-fluid ' />
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#userMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="userMenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item mx-1">
                  <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/user'}>User List</Link>
              </li>
              <li class="nav-item mx-1">
                  <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3 px-3" to={'/paper/list'} id="navbarDropdown" >Paper List</Link>
              </li>
              <li class="nav-item mx-1">
                  <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/user/request'}>User Request</Link>
              </li>
              <li class="nav-item mx-1">
                  <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3" to={'/paper/request'}>Paper Request</Link>
              </li>
              <li class="nav-item mx-1">
                  <button className='btn btn-danger' onClick={()=>{
                    action.LogOutAdmin()
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
