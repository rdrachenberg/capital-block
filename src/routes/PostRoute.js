import React from "react";
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import Post from '../components/Post'

export default (props) => (
    <div>
        <NavbarPage/>
            <Post {...props}/>
        <FooterPage/>
    </div>
)