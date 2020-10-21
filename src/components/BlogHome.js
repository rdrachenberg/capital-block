import React, { Component } from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import API from '../utils/API';
import BlogPost from './BlogPost';

class BlogHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            loggedIn: (document.cookie.indexOf('x-auth-token') !== -1),
            post: undefined
        };
    }

    componentDidMount(){
        API.getPosts().then((data) => {
            // console.log(data);
            console.log('************** componentDidMount Data **************')
            
            this.setState({
                loggedIn:(document.cookie.indexOf('x-auth-token') !== -1),
                modal1: true,
                post: data
            });
            // console.log(this.state);
        })
    }
    render(){
        let postData = this.state.post;
        console.log(postData);
        if(!postData){
            return (
            <div className='container'>
                <div className='card'>
                    <MDBCard >
                    <MDBCardImage src="https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg" alt="MDBCard image cap" top hover
                        overlay="white-slight" id='blog-image' />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">This is the best Title Ever!</MDBCardTitle>
                        <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                        </MDBCardText>
                        <MDBBtn outline='true' size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </div>
                <MDBCardGroup>
                    <MDBCard  >
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg" alt="MDBCard image cap" top hover overlay="white-slight" />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                        <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.</MDBCardText>
                        <MDBBtn outline='true' size="md">read more</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg" alt="Card cap" top hover overlay="white-slight"/>
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                            <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.
                            </MDBCardText>
                            <MDBBtn outline='true' size="md">
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
                        <MDBBtn outline='true' size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
                <div className='card'>
                    <MDBCard  >
                    <MDBCardImage src="https://cdn.pixabay.com/photo/2016/11/23/14/37/blur-1853262_1280.jpg" alt="MDBCard image cap" top hover
                        overlay="white-slight" id='blog-image' />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">This is the best Title Ever!</MDBCardTitle>
                        <MDBCardText>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                        </MDBCardText>
                        <MDBBtn outline='true' size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </div>
                <MDBCardGroup>
                    <MDBCard  >
                    <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg" alt="MDBCard image cap" top hover overlay="white-slight" />
                    <MDBCardBody>
                        <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                        <MDBCardText>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.</MDBCardText>
                        <MDBBtn outline='true' size="md">read more</MDBBtn>
                    </MDBCardBody>
                    </MDBCard>

                    <MDBCard>
                        <MDBCardImage src="https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg" alt="Card cap" top hover overlay="white-slight"/>
                        <MDBCardBody>
                            <MDBCardTitle tag="h5">My Title</MDBCardTitle>
                            <MDBCardText>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio.
                            </MDBCardText>
                            <MDBBtn outline='true' size="md">
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
                        <MDBBtn outline='true' size="md">
                        read more
                        </MDBBtn>
                    </MDBCardBody>
                    </MDBCard>
                </MDBCardGroup>
            </div>
            );
        } else {
            const posts = postData.data.map((post) => 
                    <BlogPost data={post}/>
                );
            
                return(
                    <div className='container'>
                        {posts}
                    </div>
                );
        }
    }
}

export default BlogHome;

//{posts}