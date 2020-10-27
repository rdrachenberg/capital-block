import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeRoute from './HomeRoute'
import LoginRoute from './LoginRoute';
import Contact from './ContactRoute';
import RegisterRoute from './RegisterRoute';
import About from './AboutRoute';
import Post from './PostRoute';
import LogoutRoute from './LogoutRoute';
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'



export default (props) => (
    <BrowserRouter>
        <Navbar {...props}/>
            <Switch>
                <Route exact path='/' render={() => { return (<div><HomeRoute/></div>)}}/>
                <Route exact path='/login' render={() => { return (<div><LoginRoute {...props}/></div>)}}/>
                <Route exact path='/register' render={() => { return (<div><RegisterRoute/></div>)}}/>
                <Route exact path='/post' render={() => { return (<div><Post {...props}/></div>)}}/>
                <Route exact path='/logout' render={() => { return (<div><LogoutRoute /> </div>)}}/>
                <Route exact path='/contact' render={() => { return (<div><Contact/></div>)}}/>
                <Route exact path='/about' render={() => { return (<div><About/></div>)}}/><Route/>
            </Switch>
        <Footer/>
    </BrowserRouter>
)

/*
 <Route exact path='/login' render={() => {
                return (<div><LoginRoute/></div>)
            }}/>

component = {
    LoginRoute
}
            render = {
                    () => {
                        return ( < div > < RegisterRoute / > < /div>)
                        }
                    }
*/