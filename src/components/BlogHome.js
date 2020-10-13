import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";

const BlogHome = () => {
    return (
        <div className='container'>
            <div className='card'>
                <MDBCard wide='true' collection='true'>
                <MDBCardImage src="https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" id='blog-image' />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">This is the best Title Ever!</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                    </MDBCardText>
                    <MDBBtn color="green" size="md">
                    read more
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>
            <MDBCardGroup>
                <MDBCard wide='true' collection='true'>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg" alt="MDBCard image cap" top hover overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                    <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.</MDBCardText>
                    <MDBBtn MDBBtn color = "green" size = "md" >read more</MDBBtn>
                </MDBCardBody>
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg" alt="Card cap" top hover overlay="white-slight"/>
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                        <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.
                        </MDBCardText>
                        <MDBBtn color="green" size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.
                    </MDBCardText>
                    <MDBBtn color="green" size="md">
                    read more
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
            <div className='card'>
                <MDBCard wide='true' collection='true'>
                <MDBCardImage src="https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" id='blog-image' />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">This is the best Title Ever!</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                    </MDBCardText>
                    <MDBBtn color="green" size="md">
                    read more
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>
            <MDBCardGroup>
                <MDBCard wide='true' collection='true'>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg" alt="MDBCard image cap" top hover overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                    <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.</MDBCardText>
                    <MDBBtn MDBBtn color = "green" size = "md" >read more</MDBBtn>
                </MDBCardBody>
                </MDBCard>

                <MDBCard>
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg" alt="Card cap" top hover overlay="white-slight"/>
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                        <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.
                        </MDBCardText>
                        <MDBBtn color="green" size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBCard>
                <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2821%29.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.
                    </MDBCardText>
                    <MDBBtn color="green" size="md">
                    read more
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </MDBCardGroup>
        </div>
    );
}

export default BlogHome;