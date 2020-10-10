import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import HomeRoute from './HomeRoute'
import LoginRoute from './LoginRoute';
// import LoginRoute from './LoginRoute'
import RegisterRoute from './RegisterRoute'

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomeRoute}/>

            <Route exact path='/register' component={RegisterRoute}/>
            <Route exact path='/login' render={() => {
                return (<div><LoginRoute/></div>)
            }}/>
            <Route/>
            <Route/>
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