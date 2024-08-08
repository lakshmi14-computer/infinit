import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand
  } from 'mdb-react-ui-kit';

  
function Header() {
  return (
    <div>
      <MDBNavbar light bgColor='info'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#' className='text-light fw-bolder'>
            <img
              src='https://cdn.dribbble.com/users/221753/screenshots/1214929/dribbl_counter.gif'
              height='30'
              alt=''
              loading='lazy'
            />
          Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header
