import React from "react";
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import Post from '../components/Post'

export default () => (
    <div>
        <NavbarPage/>
            <Post/>
        <FooterPage/>
    </div>
)