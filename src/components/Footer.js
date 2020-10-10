import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
    return (
        <MDBFooter  color = "unique-color-dark" className = "font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-sm-right">
            <MDBRow>
                <MDBCol md="4"></MDBCol>
                <MDBCol size="auto">
                    <p>Home</p>
                </MDBCol>
                <MDBCol size = "auto" >
                    <p>Contact</p>
                </MDBCol>
                <MDBCol size = "auto" >
                    <p>Support</p>
                </MDBCol>
                <MDBCol size = "auto" >
                    <p>Contact</p>
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