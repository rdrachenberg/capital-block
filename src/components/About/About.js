import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import logo from '../../img/capital-block-final-logo.png'

const AboutPage = () => {
    return (
        <section  id='about-container'>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
            About
        </h2>
        
        <MDBRow>
        <MDBCol md='2'/>
            <MDBCol md='2'>
                <img src={logo} className="img-fluid" alt="capital block logo" id='logo' />
            </MDBCol>
            <MDBCol md='4'>
            <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </p>
            </MDBCol>
            <MDBCol md='4'/>
        </MDBRow>
        </section>
    );
}

export default AboutPage;