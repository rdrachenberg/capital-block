import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import JumbotronPage from '../components/Home/Home'
import BlogHome from '../components/BlogHome/BlogHome'
import LoginPage from '../components/Login/Login'
import Contact from '../components/Contact/Contact'
import RegisterPage from '../components/Registration/Register'
import About from '../components/About/About';
import Post from '../components/Post/Post'
import LogoutPage from '../components/Logout/Logout'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => (
    <BrowserRouter>
        <Navbar {...props}/>
            <Switch>
                <Route exact path='/' render={() => { return (<div><JumbotronPage/><BlogHome/></div>)}}/>
                <Route exact path='/login' render={() => { return (<div><LoginPage {...props}/></div>)}}/>
                <Route exact path='/register' render={() => { return (<div><RegisterPage {...props}/></div>)}}/>
                <Route exact path='/post' render={() => { return (<div><Post {...props}/></div>)}}/>
                <Route exact path='/logout' render={() => { return (<div><LogoutPage /> </div>)}}/>
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