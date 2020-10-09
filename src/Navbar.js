import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon,  MDBCol
}
from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './img/capital-block-final-logo.png'

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
    return (
    <Router>
        <MDBNavbar color='unique-color-dark' dark expand= "md" >
            <MDBNavbarBrand id='brand'>
                <MDBCol md="4" className='logo-background'>
                    <img src={logo} className="img-fluid" alt="logo image" id='logo' />
                </MDBCol>
            </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
            <MDBNavItem active>
                <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/register">Register</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/logout">Logout</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/support">Support</MDBNavLink>
            </MDBNavItem>
          
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg" className="rounded-circle z-depth-0"
                    style={{ height: "35px", padding: 0, }} alt="" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="/account">Account</MDBDropdownItem>
                    <MDBDropdownItem href="/logout">Logout</MDBDropdownItem>
                    <MDBDropdownItem href="login">Login</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;