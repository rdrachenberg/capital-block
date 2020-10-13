import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const ContactPage = () => {
    return (
        <section className="my-5">
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Contact us
            </h2>
            <MDBRow>
                <MDBCol lg="">
                    <div id="map-container" className="rounded z-depth-1-half map-container" style={{ height: "225px"}}>
                        <iframe
                            src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28013.628777739526!2d-81.3636183!3d28.6386443!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e770489e024ccf%3A0x5d17502c50c0867b!2s921%20S%20Orlando%20Ave%2C%20Maitland%2C%20FL%2032751!5e0!3m2!1sen!2sus!4v1602452256564!5m2!1sen!2sus"
                            title="Capital Block"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            style={{ border: 0 }}/>
                    </div>
                    <br/>
                </MDBCol>
            </MDBRow>
            <MDBRow className = "text-center" style={{ marginBottom: "5%"}}>
                <MDBCol md="4"/>
                <MDBCol md = "4">
                    <MDBBtn tag = "a"
                    color = "green"
                    className = "accent-1"
                    outline = 'green'
                    target='_blank'
                    href = 'https://www.google.com/search?q=921+s+orlando+ave+maitland+fl+32751&rlz=1C5CHFA_enUS782US782&oq=921+s+orlando+af&aqs=chrome.1.69i57j0i13i457j0i13i30.5733j0j7&sourceid=chrome&ie=UTF-8'>
                            <MDBIcon icon="map-marker-alt" />
                    </MDBBtn>
                    <MDBBtn tag = "a"  color = "green" className = "accent-1" outline = 'green' href='tel:1-407-341-1162'>
                        <MDBIcon icon="phone" />
                    </MDBBtn>
                    <MDBBtn tag="a"  color= "green" className="accent-1" outline='green' href='mailto:RyanDrachenberg@gmail.com' >
                        <MDBIcon icon="envelope" />
                    </MDBBtn>
                </MDBCol>
            </MDBRow>
            <MDBRow className = "text-center" >
                <MDBCol lg='4'/>
                    <MDBCol lg="4" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                            <div className="form-header green accent-1">
                                <h3 className="mt-2">
                                <MDBIcon icon="envelope" /> Send a message:
                                </h3>
                            </div>
                            <p className="dark-grey-text">
                                We'll respond within 24hrs.
                            </p>
                            <div className="md-form">
                                <MDBInput
                                icon="user"
                                label="Your name"
                                iconClass="grey-text"
                                type="text"
                                id="form-name"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                icon="envelope"
                                label="Your email"
                                iconClass="grey-text"
                                type="text"
                                id="form-email"
                                />
                            </div>
                            <div className="md-form">
                                <MDBInput
                                icon="tag"
                                label="Subject"
                                iconClass="grey-text"
                                type="text"
                                id="form-subject"
                                />
                            </div>
                            <div className="text-center">
                                <div className='green accent-1'>
                                <MDBBtn color="green accent-1">Submit</MDBBtn>
                                </div>
                            </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
            </MDBRow>
            <MDBRow className="text-center">
            </MDBRow>
        </section>
    );
}

export default ContactPage;