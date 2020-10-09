import React, { Component } from "react";
import { MDBContainer } from "mdbreact";
import "./index.css";
import NavbarPage from './Navbar'
import FooterPage from './Footer'
import JumbotronPage from './Home'


class App extends Component {
  render() {
    return (
      <MDBContainer>
        < NavbarPage/>
        < JumbotronPage/>
        < FooterPage/>
      </MDBContainer>
    );
  }
}

export default App;


// Dummy Avitar img:  https://www.netclipart.com/pp/m/244-2441803_profile-pic-icon-png.png