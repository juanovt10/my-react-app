import React, {useEffect, useState} from 'react'
import axios from 'axios'

function HTTPHooks() {
    // define all the "states"
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    const [postMessaage, setPostMessage] = useState(null);
    // define the post api handler to post something
    const postToApi = () => {
        axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            {
                title: "Hello world!",
                body: "it works",
                userId: 123,
            }
        ).then(response => {
            // here we use the state and check if the status is successfull 
            setPostMessage(
                response.status === 201 ?
                `Success! Title: ${response.data.title}` :
                'Failed'
            )
        })
    }

    // instead of did mount we use the use effect
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            // define the data variable and check if the get data 
            // is an array 
            const data = Array.isArray(response.data) ?
                response.data :
                [response.data]
            // update the state with setPost
            setPosts(data)
        })
        // update the state with error if this ocurrs
        .catch(error => {
            setError(error.message)
        })
    },[])



    return (
        <div>
            <button onClick={postToApi}>
                Create post!
            </button>
            <p>{postMessaage}</p>
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
                        error 
                        ? <p>{error}</p>
                        :
                        <h4>Loading posts ...</h4>
                    )
                }
        </div>
    )
}

export default HTTPHooks