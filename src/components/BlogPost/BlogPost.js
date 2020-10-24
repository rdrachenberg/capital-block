import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
const BlogPost = (props) => {
    
        return(
            <div className='card'>
                <MDBCard >
                <MDBCardImage src={props.data.img} alt="MDBCard image cap" top hover
                    overlay="white-slight" id='blog-image' />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">{props.data.title}</MDBCardTitle>
                    <MDBCardText>
                        {props.data.text}
                    </MDBCardText>
                    <MDBBtn outline='true' size="md">
                    read more
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>        
        )
}

export default BlogPost