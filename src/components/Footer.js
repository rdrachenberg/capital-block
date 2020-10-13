import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter  color = "unique-color-dark" className = "font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-sm-right">
            <MDBRow id='footer-row'>
                <MDBCol md="4"></MDBCol>
                <MDBCol size="1">
                    <a href='/'>
                        <p>Home</p>
                    </a>
                </MDBCol>
                <MDBCol>
                    <a href='/about'>
                        <p>About</p>
                    </a>
                </MDBCol>
                <MDBCol >
                    <a href='/contact'>
                        <p>Contact</p>
                    </a>
                </MDBCol>
                <MDBCol>
                    <a href='mailto:ryanDrachenberg@gmail.com'>
                        <p>Email</p>
                    </a>
                </MDBCol>
                <MDBCol md="4"></MDBCol>
            </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright: <a href="/">Capital Block</a>
            </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default FooterPage;