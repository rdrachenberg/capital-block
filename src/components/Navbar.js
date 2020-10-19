import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBCol} from "mdbreact";
import logo from '../img/capital-block-final-logo.png';
import avatar from '../img/avatar.jpeg';
import Login from './Login';
// import Cookies from 'universal-cookie';
// const cookies = new Cookies();

class NavbarPage extends Component {
  constructor(props){
    super(props);
    this.state = {
    isOpen: false,
    loggedIn: (document.cookie.indexOf('x-auth-token') !== -1),
    modal1:true

    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  
  

  toggleCollapse = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({ 
    [modalNumber]: !this.state[modalNumber],
    isOpen: !this.state.isOpen,
    modal1: true
    });
  }



componentDidMount(){
  this.setState({
    loggedIn:(document.cookie.indexOf('x-auth-token') !== -1),
    modal1: true
  })

  
  // console.log(this.state.loggedIn);
}

render() {
  // console.log(this.state.loggedIn);
  let loggedIn = this.state.loggedIn;
  if(loggedIn){
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
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  } else {
    
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
                <MDBNavLink to="/contact">Support</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
    
  }
}

export default NavbarPage;