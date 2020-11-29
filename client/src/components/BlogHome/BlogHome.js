import React, { Component } from "react";
import API from '../../utils/API';
import BlogPost from '../BlogPost/BlogPost';

class BlogHome extends Component {
    constructor(props){
        super(props);
        this.state = {
            modal1: true,
            loggedIn: (document.cookie.indexOf('x-auth-token') !== -1),
            post: undefined,
            name: ''
            
        };
    }

    componentDidMount(){
        API.getPosts().then((data) => {
            // console.log(data);
            // console.log('************** componentDidMount Data **************')
            
            this.setState({
                loggedIn:(document.cookie.indexOf('x-auth-token') !== -1),
                modal1: true,
                post: data,
                

            });
            // console.log(this.state);
        })
    }
    render(){
        let postData = this.state.post;
        // console.log(postData);
        if(!postData){
            return (
            <div className='container'>
                <div className='card'>
                    <h2>No post yet</h2>
                </div>
            </div>
            );
        } else {
            const posts = postData.data.map((post, i) => 
                    <BlogPost data={post} key={i}/>
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