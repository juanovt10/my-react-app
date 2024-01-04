import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItemChallenge from './PostItemChallenge'
import LoaderChallenge from './LoaderChallenge'

class ContentChallenge extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        }
    }
    // As soon the component is mounted trigger the
    // loadTimer method
    componentDidMount() {
        this.loadedTimer()
    }

    // method to change the state to true after 2s
    loadedTimer() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    render() {
        console.log(savedPosts)
        return (

            <div>
                {this.state.isLoaded ? (
                    <div>
                        <div className={css.titleBar}>
                            <h1>My Photos</h1>
                        </div>
                        <div className={css.SearchResults}>
                            {savedPosts.map(post => (
                                <PostItemChallenge key={post.title} post={post} className={css.SearchItem}/>
                            ))} 
                        </div> 
                    </div>
                ) : ( 
                    <div>
                        <LoaderChallenge />
                    </div> 
                )}
            </div>
        )
    }
}

export default ContentChallenge