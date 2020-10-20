import React, { createContext } from "react";
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
            author: '5f8def8fb2fd7f35a0cc24ee',
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
            console.log(this.state);
            API.savePost({
                img: this.state.img,
                title: this.state.title,
                text: this.state.text,
                author: this.state.author,
                date: Date.now()
                

            }).then(response => {
                console.log(response);
                console.log(`${this.state.loggedIn}`);
            
            })
            .catch(err => console.log(err));
        }
        
        console.log('🌎  ==> Post pluggin!!!!  🌎');
    }
    // componentDidMount(){
    //     let token = cookies.get('x-auth-token');
    //     // console.log(token);
    //     // console.log(this);
    //     let decodedToken = "5f8def8fb2fd7f35a0cc24ee";
    //     this.setState({
    //         toHome:false,
    //         author: decodedToken
    //     })
    // }
    

    render(){
        // console.log(this.state);
        if(this.state.toHome === true){
            return(<Redirect to='/'/>)
        };

        // if(this.state.loggedIn === true){
        //     createContext(this.state.loggedIn===true);
            
        // }
        

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
                            <label htmlFor="Post" className="grey-text">Post title</label>
                            <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.handleChange} autoComplete='title' required/>
                            <br />
                            <label htmlFor="RegisterEmail" className="grey-text">Description</label>
                            <input type="text-area" id="text" className="form-control" value={this.state.text} onChange={this.handleChange} autoComplete='text' required/>
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