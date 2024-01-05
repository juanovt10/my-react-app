import React, { Component } from 'react'
import axios from 'axios'

export class HTTPRequests extends Component {
    constructor(props) {
        super(props)
        
        // set the initial state of posts to an empty array
        this.state = {
            posts: [],
        }
    }

    // As the trigger to getting the API is mountin this component
    
    componentDidMount() {
        // makes the API call
        axios.get('https://jsonplaceholder.typicode.com/posts')
        // handels the response
        .then(response => {
            // assings the response data to the posts state
            this.setState({
                posts: response.data,
            })
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                <h2>Posts: </h2>
                {JSON.stringify(this.state.posts)}
            </div>
        )
    }
}

export default HTTPRequests