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
        </nav>
    </div>
  )
}
export default GBar;
