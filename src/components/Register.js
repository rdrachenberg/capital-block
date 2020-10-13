import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';



const RegisterPage = () => {
return (
<MDBContainer align = 'center' id='register-container'>
    <MDBRow align='center'>
    <MDBCol md="3"/>
    
    <MDBCol md="6">
        <form align='center'>
        <p className="h4 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
            Your name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
            Your email
        </label>
        <input type="email" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
            Confirm your email
        </label>
        <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
            Your password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
        <div className="text-center mt-4">
            <MDBBtn color="green" type="submit">
            Register
            </MDBBtn>
        </div>
        </form>
    </MDBCol>
    <MDBCol md="3"/>
    </MDBRow>
</MDBContainer>

);
};

export default RegisterPage;