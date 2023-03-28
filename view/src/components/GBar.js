import React from 'react';
import { Link} from 'react-router-dom';
import logo from './Images/logo.jpeg';

 const GBar = () => {

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
                <Link class="nav-link  shadow text-primary fw-bold border border-primary rounded-3" to={'/login'}>LogIn as User</Link>
            </li>
            <li class="nav-item mx-3">
                <Link class="nav-link shadow text-primary fw-bold border border-primary rounded-3" to={'/admin/login'}>LogIn as Admin</Link>
            </li>
            </ul>
        </div>
        </nav>
    </div>
  )
}
export default GBar;
