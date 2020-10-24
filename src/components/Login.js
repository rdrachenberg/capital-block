import React, { Component } from 'react';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBInput, MDBModalFooter, MDBNavLink } from 'mdbreact';
import { Redirect, withRouter} from 'react-router-dom';
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
            user: '',
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
        e.target.className += " was-validated";
        
        if(this.state.email && this.state.password){
            
            API.login({
                email: this.state.email,
                password: this.state.password,

            }).then(res => {
                console.log(res);
                console.log('this is the res +++++')
                if(res.status === 401){
                    console.log('The response 401 was hit');
                    document.getElementById('#email').className = 'invalid';
                }
                // console.log(res);
                this.setState({
                    toHome: true,
                    loggedIn: true,
                    user: res.data
                })
                console.log(this.state.user);
                const token = res.data.token;
                cookies.set('x-auth-token', token, { path: '/'});
                
                this.props.history.replace('/');

            })
            .catch(err => console.log(err));
        }
        
        console.log('🌎  ==> loggin logged!!!!  🌎');
    }

    render() {
        // // console.log(this.state);
        if(this.state.toHome === true){
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
                    <form className="needs-validation" onSubmit={this.handleSubmit} noValidate id='login-form'>
                        <MDBInput  id='email' label="Type your email" icon="envelope" group type="text"  error="wrong" success="right" value={this.state.email} onChange={this.handleChange} autoComplete='email'/>
                        <div className="valid-feedback">Looks good!</div>
                        <div className="invalid-feedback">Please provide a valid city.</div>
                        <MDBInput id='password' label="Type your password" icon="lock" group type="password" value={this.state.password} onChange={this.handleChange} autoComplete='password' className="form-control"/>
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