import React, { Component } from 'react'
import axios from 'axios'

export class HTTPPost extends Component {
    constructor(props) {
        super(props)
        // set the initial state of the api repsonse to null
        this.state = {
            apiResponse: null
        }
    }

    postToApi = () => {
        axios.post(
            // make the call to the right URL
            'https://jsonplaceholder.typicode.com/posts',
            // provide the data to be posted in the correct format
            {
                title: "Hello world!",
                body: "it works",
                userId: 123,
            }
            // manage the response from the api
        ).then(response => {
            // change the state from null to the response data
            this.setState({
                apiResponse: response.data
            })
        })
    }

    render() {
        const {apiResponse} = this.state;
        return (
            <div>
                <button onClick={this.postToApi}>
                    Create post!
                </button>
                {
                    apiResponse ? (
                        <div>
                            <h1>{apiResponse.title}</h1>
                            <p>post id: {apiResponse.id}</p>
                            <p>{apiResponse.body}</p>
                            <p>user id: {apiResponse.userId}</p>
                        </div>
                    ) : (
                        <p>Please press the button above</p>
                    )
                }
            </div>
        )
    }
}

export default HTTPPost