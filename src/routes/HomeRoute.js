import React from "react";
import "../index.css";
import NavbarPage from '../components/Navbar'
import FooterPage from '../components/Footer'
import JumbotronPage from '../components/Home'
import BlogHome from '../components/BlogHome'

export default () => (
    <div>
        <NavbarPage/>
            <JumbotronPage/>
            <BlogHome/>
        <FooterPage/>
    </div>
)