import React, { Component } from "react";
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import RegisterPage from '../components/Register'

export default () => (
    <div>
        <NavbarPage/>
            <RegisterPage/>
        <FooterPage/>
    </div>
)