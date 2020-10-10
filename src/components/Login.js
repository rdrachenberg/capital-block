import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter, MDBNavLink } from 'mdbreact';
import '../index.css';

class LoginPage extends Component {
state = {
    modal1: false
}

toggle = nr => () => {
    let modalNumber = 'modal' + nr
    this.setState({
        [modalNumber]: !this.state[modalNumber]
    });
}

render() {
        return (
            <MDBContainer>
            <MDBNavLink to="/" data-toggle='modal' onClick={this.toggle(1)}>Login</MDBNavLink>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
                    <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle(1)}>Sign in</MDBModalHeader>
                    <MDBModalBody>
                    <form className="mx-3 grey-text">
                        <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong" success="right" />
                        <MDBInput label="Type your password" icon="lock" group type="password" validate />
                    </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                    <MDBBtn onClick={this.toggle(1)}>Login</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default LoginPage;