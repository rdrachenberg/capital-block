import React from 'react'
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import LogoutPage from '../components/Logout'

export default () => (
    <div>
        <NavbarPage/>
            <LogoutPage />
        <FooterPage/>
    </div>
)