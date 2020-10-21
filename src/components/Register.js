import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from '../utils/API';
import { withRouter } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false,
            loggedIn: false,
            name: '',
            email: '',
            password: '',
            repassword: '',
            error: {
                name: '',
                email: '',
                password: '',
                repassword: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }
        
    

    handleChange = (e) => {
        // console.log(e)
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.name && this.state.email && this.state.password){
            
            API.saveUser({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                date: Date.now()
                

            }).then(this.setState(() => ({
                toHome: true,
                loggedIn: true
                
            }))).then(res => {
                // console.log(res);
                
                const token = res.data;
                // console.log(token);

                cookies.set('x-auth-token', token, {path:'/'})
                this.props.history.replace('/');
                console.log(`${this.state.loggedIn}`)})
            .catch(err => console.log(err));
        }
        
        console.log('🌎  ==> DB clucking!!!!  🌎');
    }

    

    render(){

        return (
            <MDBContainer align = 'center' id='register-container'>
                <MDBRow align='center'>
                    <MDBCol md="3"/>
                    <MDBCol md="6">
                        <form align='left' onSubmit={this.handleSubmit}>
                            <p className="h4 text-center mb-4">Sign up</p>
                            <label htmlFor="RegisterName" className="grey-text">Your first name</label>
                            <input type="text" id="name" className="form-control" value={this.state.name} onChange={this.handleChange} autoComplete='name' required/>
                            <br />
                            <label htmlFor="RegisterEmail" className="grey-text">Your email</label>
                            <input type="email" id="email" className="form-control" value={this.state.email} onChange={this.handleChange} autoComplete='email' required/>
                            <br />
                            <label htmlFor="RegisterPassword" className="grey-text">Your password</label>
                            <input type="password" id="password" className="form-control" value={this.state.password} onChange={this.handleChange} autoComplete='password' required/>
                            <br />
                            <label htmlFor="RegisterPasswordConfirm" className="grey-text">Confirm your password</label>
                            <input type="password" id="repassword" className="form-control" />
                            <div className="text-center mt-4">
                                <MDBBtn type="submit">Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                    <MDBCol md="3"/>
                </MDBRow>
            </MDBContainer>
        );
    }

};

export default withRouter(RegisterPage);