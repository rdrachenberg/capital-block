import React from 'react'
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import About from '../components/About'


export default () => (
    <div>
        <NavbarPage/>
            <About/>
        <FooterPage/>
    </div>
)