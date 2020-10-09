import React from "react";
import {
    MDBJumbotron,
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBCardImage
} from "mdbreact";

const JumbotronPage = () => {
    return (
        <MDBContainer className="mt-1 text-center">
            <MDBRow>
            <MDBCol>
                <MDBJumbotron>
                    <img className='img-fluid' src='https://cdn.pixabay.com/photo/2018/01/19/05/28/bitcoin-3091789_1280.jpg' className='home-img'/>
                <MDBCardBody id='home-card-body'>
                    <MDBCardTitle className="h2">
                        Welcome to your capital block!
                    </MDBCardTitle>
                        <p className="red-text my-4 font-weight-bold">A place for capital and blockchain enthusist to meet and learn!</p>
                    <MDBCardText> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                    </MDBCardText>
                    <hr className="my-4" />
                    <div className="pt-2">
                    <MDBBtn color = "#47c86c green accent-2" className = "waves-effect" > 
                        Register Today 
                    <MDBIcon far icon = "hand-point-left" />
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
