import React from 'react'
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import Contact from '../components/Contact'


export default () => (
    <div>
        <NavbarPage/>
            <Contact/>
        <FooterPage/>
    </div>
)