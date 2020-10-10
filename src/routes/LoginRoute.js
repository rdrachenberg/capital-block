import React from 'react'
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import LoginPage from '../components/Login'

export default () => (
    <div>
        <NavbarPage/>
            <LoginPage/>
        <FooterPage/>
    </div>
)