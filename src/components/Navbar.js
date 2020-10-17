import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol} from "mdbreact";
import logo from '../img/capital-block-final-logo.png';
import avatar from '../img/avatar.jpeg';
import Login from './Login';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
    return (
        <MDBNavbar color='unique-color-dark' dark expand= "md" >
            <MDBNavbarBrand id='brand'>
                <MDBCol md="4" className='logo-background'>
                    <a href='/'>
                      <img src={logo} className="img-fluid" alt="capital block logo" id='logo' />
                      </a>
                </MDBCol>
            </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav right>
            <MDBNavItem>
                <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/login" data-toggle='modal' component={Login}>Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/register">Register</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/logout">Logout</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
                <MDBNavLink to="/contact">Support</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle className="dopdown-toggle" nav>
                  <img src={avatar} className="rounded-circle z-depth-0"
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
    );
  }
}

export default NavbarPage;