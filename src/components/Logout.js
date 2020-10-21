import React, { Component } from 'react';

import {Redirect, withRouter} from 'react-router-dom';
import '../index.css';
import API from '../utils/API';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LogoutPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal1: false,
            toHome: false,
            loggedIn: false,
            error: {
                
            }
        };
        this.handleChange = this.handleChange.bind(this);
        
        
        
    }
    

    handleChange = (e) => {
        
        this.setState({
            [e.target.id] : e.target.value,
            
        });
    }



    handleSubmit = (e) => {
        // e.preventDefault();

        
    }
    componentWillUnmount() {
        cookies.remove('x-auth-token');
        console.log(this.state)
        console.log('hit');
            API.logout({
            }).then(this.setState(() => ({
                toHome: true,
                loggedIn: false 
                
            }))).then(res => {
                console.log(res);
                
                cookies.remove('x-auth-token');
                // window.location.reload();
                // this.props.history.replace('/');

            })
            .catch(err => console.log(err));
        
        
        console.log('🌎  ==> loggeed out this user!!!!  🌎');
        if(document.cookie.indexOf("x-auth-token") !== -1){
            this.props.history.push("/");
            console.log('cookie still there');
        } else {
            this.props.history.push("/");
            console.log('cookies be gone');
        }
    }


    render() {
        // console.log(this.state);
        if(this.state.toHome === true){
            return(<Redirect to='/about' />)
        };

        // if(this.state.loggedIn === true){
        //     createContext(this.state.loggedIn===true);
        // }
        return (
            <div>
                <Redirect to='/'/>
            </div>
        );
    }
}

export default withRouter(LogoutPage);

// console.log(this.props.history);
                // console.log(cookies.get('x-auth-token'));
                // console.log(this.props);
                // res.redirect('http://localhost:3000');
                // const current = props.location.pathname;
                // this.props.history.replace('/');
                // setTimeout(() => {
                //     this.props.history.replace(current);
                // });