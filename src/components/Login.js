import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter, MDBNavLink } from 'mdbreact';
import {Redirect, withRouter} from 'react-router-dom';
import '../index.css';
import API from '../utils/API';
import Cookies from 'universal-cookie';


const cookies = new Cookies();


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            toHome: false,
            loggedIn: false,
            email: '',
            password: '',
            error: {
                email: '',
                password: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.toggle = this.toggle.bind(this);
        
        
    }
    
     toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
            [modalNumber]: !this.state[modalNumber],
            toHome: false,
            loggedIn: false,
        });
        
    }
        
    // componentDidMount() {
    //     if(document.cookie.indexOf("x-auth-token") !== -1){
    //         this.props.history.push("/404");
    //     }
    // }


    handleChange = (e) => {
        
        this.setState({
            [e.target.id] : e.target.value,
            
        });
    }



    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.email && this.state.password){
            console.log(this.state)
            API.login({
                email: this.state.email,
                password: this.state.password,

            }).then(this.setState(() => ({
                toHome: true,
                loggedIn: true
                
            }))).then(res => {
                console.log(res.data);
                const token = res.data.token;
                cookies.set('x-auth-token', token, { path: '/'});

                this.props.history.replace('/');

            })
            .catch(err => console.log(err));
        }
        
        console.log('🌎  ==> loggin logged!!!!  🌎');
    }

   

    render() {
        // console.log(this.state);
        if(this.state.toHome === true){
            // loggedIn = this.state.loggedIn;
            return(<Redirect to='/about' />)
        };

        // if(this.state.loggedIn === true){
        //     createContext(this.state.loggedIn===true);
        // }
        return (
            <MDBContainer>
            <MDBNavLink to="/" data-toggle='modal' onClick={this.toggle(1)}>Login</MDBNavLink>
                <MDBModal isOpen={this.state.modal1} toggle={this.toggle(1)}>
                    <MDBModalHeader className="text-center" titleClass="w-100 font-weight-bold" toggle={this.toggle(1)}>Sign in</MDBModalHeader>
                    <MDBModalBody>
                    <form className="mx-3 black-text" onSubmit={this.handleSubmit} id='login-form'>
                        <MDBInput  id='email' label="Type your email" icon="envelope" group type="text"  error="wrong" success="right" value={this.state.email} onChange={this.handleChange} autoComplete='email' placeholder={this.state.email}/>
                        <MDBInput id='password' label="Type your password" icon="lock" group type="password" value={this.state.password} onChange={this.handleChange} autoComplete='password'/>
                    </form>
                    </MDBModalBody>
                    <MDBModalFooter className="justify-content-center">
                    <MDBBtn onClick={this.handleSubmit} type='submit'>Login</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>
            </MDBContainer>
        );
    }
}

export default withRouter(LoginPage);

// console.log(this.props.history);
                // console.log(cookies.get('x-auth-token'));
                // console.log(this.props);
                // res.redirect('http://localhost:3000');
                // const current = props.location.pathname;
                // this.props.history.replace('/');
                // setTimeout(() => {
                //     this.props.history.replace(current);
                // });