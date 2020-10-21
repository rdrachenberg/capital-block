import React from 'react';
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
class BlogPost extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        // console.log(this.props.data);
        const data = this.props.data
        console.log(data);
        console.log('<<<<<< Data >>>>>>>^^^^^^^')
        let posts = data.map((post) => {
            console.log(post.title);
            return post.title
        })

        console.log(posts);
        console.log(this.props.data);
        
        return(
            <div className='card'>
                <MDBCard >
                <MDBCardImage src="https://cdn.pixabay.com/photo/2018/09/16/22/08/software-3682509_1280.jpg" alt="MDBCard image cap" top hover
                    overlay="white-slight" id='blog-image' />
                <MDBCardBody>
                    <MDBCardTitle tag="h5">{this.props.data.title}</MDBCardTitle>
                    <MDBCardText>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Fugaaliquid dolorem ea distinctio exercitationem delectus qui, quas eum architecto, amet quasi accusantium, fugit consequatur ducimus obcaecati numquam molestias hic itaque accusantium doloremque laudantium, totam rem aperiam.
                    </MDBCardText>
                    <MDBBtn outline='true' size="md">
                    read more
                    </MDBBtn>
                </MDBCardBody>
                </MDBCard>
            </div>
        //     <div className="Post">
        //         <img src="/blue-origami-bird.png" alt="blue-origami-bird"/>
        //         <div>
        //             <div className="description">
        //                 {this.props.data.description}
        //             </div>
        //             <div>
        //                 <span>
        //                     Author name: {this.props.data.username}
        //                 </span>
        //             </div>
        //         </div>
        //     </div>
        )
    }
}


export default BlogPost