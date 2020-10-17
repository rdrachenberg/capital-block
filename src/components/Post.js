import React, { createContext } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';


class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false,
            img: 'https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg',
            title: '',
            text: '',
            error: {
                img: '',
                title: '',
                text: '',
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
        if(this.state.img && this.state.title && this.state.text){
            
            API.saveUser({
                name: this.state.img,
                email: this.state.title,
                password: this.state.text,
                date: Date.now()
                

            }).then(this.setState(() => ({
                toHome: true,
                
                
            }))).then(res => console.log(`${this.state.loggedIn}`))
            .catch(err => console.log(err));
        }
        
        console.log('🌎  ==> Post pluggin!!!!  🌎');
    }

    

    render(){
        // console.log(this.state);
        if(this.state.toHome === true){
            return(<Redirect to='/'/>)
        };

        if(this.state.loggedIn === true){
            createContext(this.state.loggedIn===true);
            
        }
        

        return (
            <MDBContainer align = 'center' id='post-container'>
                <MDBRow align='center'>
                    <MDBCol md="3"/>
                    <MDBCol md="6">
                        <form align='left' onSubmit={this.handleSubmit}>
                            <p className="h4 text-center mb-4">Sign up</p>
                            <label htmlFor="Post" className="grey-text">Your first name</label>
                            <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange} autoComplete='name' required/>
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

export default PostPage;