import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import HomeRoute from './HomeRoute'
import LoginRoute from './LoginRoute';
import Contact from './ContactRoute';
import RegisterRoute from './RegisterRoute'
import About from './AboutRoute'
import Post from './PostRoute'

export default () => (

    <BrowserRouter>

        <Switch>
            <Route exact path='/' component={HomeRoute}/>
            <Route exact path='/login' render={() => {
                return (<div><LoginRoute/></div>)
            }}/>

            <Route exact path='/register' component={RegisterRoute}/>
            
            <Route exact path='/logout' render={() => {
                return (<div><Redirect to='/'/></div>)
            }}/>
            <Route exact path='/contact' render={() => {
                return (<div><Contact/></div>)
            }}/>
            <Route exact path='/about' render={() => {
                return (<div><About/>=</div>)
            }}/>
            <Route/>
            <Route exact path='/post' render={() => {
                return (<div><Post/>=</div>)
            }}/>
            <Route/>
        </Switch>
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