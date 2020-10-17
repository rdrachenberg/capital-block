import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardBody, MDBCardText, MDBCardTitle} from "mdbreact";

const JumbotronPage = () => {

    return (
        <MDBContainer className="mt-1 text-center">
            <MDBRow>
            <MDBCol>
                <MDBJumbotron>
                    
                        <MDBCardBody id='home-card-body'>
                            <div className='background-box'>
                                <MDBCardTitle className="h2">
                                    Welcome to your capital block!
                                </MDBCardTitle>
                                    <p className="white-text my-6 font-weight-bolder" id="jumbo-sub-text">A place for capital and blockchain enthusist to meet and learn!</p>
                                <MDBCardText id="jumbo-sub-description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                                </MDBCardText>
                            </div>
                            <hr className="my-1" />
                            <div className="pt-2">
                            <a href='/register'>
                                <MDBBtn className = "waves-effect" id='register-button'>Register</MDBBtn>
                            </a>
                            </div>
                        </MDBCardBody>
                </MDBJumbotron>
            </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default JumbotronPage; 