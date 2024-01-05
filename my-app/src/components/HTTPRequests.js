import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
        
        // set the initial state of posts to an empty array
        this.state = {
            posts: [],
            error: null,
        }
    }
    
    componentDidMount() {
        // here we added more numbers in the path to access a specific post
        // or a post that does not exist
        axios.get('https://jsonplaceholder.typicode.com/posts/909090')
        .then(response => {
            // when there where all the posts, it is for sure an array
            // however, if is not an array we need to check it
            // the if statement checks if posts is an array, 
            // if it is it returns the response data, if is not, it 
            // returns the response data within an array so it can be 
            // iterted in render 
            this.setState({
                posts: Array.isArray(response.data)
                ? response.data
                : [response.data]
            })
        })
        // this is to get the error
        // and just change the state defiend in the constructor
        .catch(error => {
            this.setState({
                error: error.message,
            })
        })
    }

    render() {
        const posts = this.state.posts;
        return (
            <div>
                <h2>Posts: </h2>
                {
                    posts.length ? (
                        posts.map(post => (
                            <div key={post.id}>
                                <h2>{post.id}. {post.title}</h2>
                                <h4>By user ID: {post.userId}</h4>
                                <p>{post.body}</p>
                                <hr />
                            </div>
                        ))
                    ) : (
                        this.state.error 
                        ? <p>{this.state.error}</p>
                        :
                        <h4>Loading posts ...</h4>
                    )
                }
            </div>
        )
    }
}

export default HTTPRequests