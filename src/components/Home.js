import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle } from "mdbreact";

const JumbotronPage = () => {
    return (
        <MDBContainer className="mt-1 text-center">
            <MDBRow>
            <MDBCol>
                <MDBJumbotron>
                <MDBCardBody id='home-card-body'>
                    <MDBCardTitle className="h2">
                        Welcome to your capital block!
                    </MDBCardTitle>
                        <p className="black-text my-6 font-weight-bold">A place for capital and blockchain enthusist to meet and learn!</p>
                    <MDBCardText> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                    </MDBCardText>
                    <hr className="my-4" />
                    <div className="pt-2">
                    <MDBBtn
                    className = "waves-effect" >
                        Register 
                    </MDBBtn>
                    </div>
                </MDBCardBody>
                </MDBJumbotron>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage; 
