import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import API from '../utils/API';
import {Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toHome: false,
            img: 'https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg',
            title: '',
            text: '',
            author: '',
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
            // console.log(this.state);
            
            // console.log(token);
            API.savePost({
                img: this.state.img,
                title: this.state.title,
                text: this.state.text,
                author: this.state.token,
                date: Date.now()
                
            }).then(response => {
                console.log(response);
                this.setState({
                    loggedIn: true
                })
                console.log(`${this.state.loggedIn}`);
                
                
            })
            .catch(err => console.log(err));
        }
        
        console.log('🌎  ==> Post pluggin!!!!  🌎');
    }
    componentDidMount(){
        

        console.log(cookies.get('x-auth-token') + ' this is the x-auth-token');
        
        
        this.setState({
            token: cookies.get('x-auth-token')
        })
    }
    

    render(){
        // console.log(this.state);
        if(this.state.toHome === true){
            return(<Redirect to='/'/>)
        };

        return (
            <MDBContainer align = 'center' id='post-container'>
                <MDBRow align='center'>
                    <MDBCol md="3"/>
                    <MDBCol md="6">
                        <form align='left' onSubmit={this.handleSubmit}>
                            <p className="h4 text-center mb-4">Make a post</p>
                            <label htmlFor="Image" className="grey-text">Post title</label>
                            <input type="text" id="post-img" className="form-control" value={this.state.img} onChange={this.handleChange} autoComplete='title' required/>
                            <br />
                            <label htmlFor="PostTitle" className="grey-text">Post title</label>
                            <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange} autoComplete='title' required/>
                            <br />
                            <label htmlFor="Post" className="grey-text">Description</label>
                            <textarea type="text" id="text" className="form-control" value={this.state.text} onChange={this.handleChange} autoComplete='text' required rows="8" cols="50"/>
                            <br />
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