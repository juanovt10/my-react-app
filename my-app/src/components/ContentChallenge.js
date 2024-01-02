import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItemChallenge from './PostItemChallenge'

class ContentChallenge extends Component {

    constructor(props) {
      super(props)
    }

    render() {
        console.log(savedPosts)
        return (
            <div>
                <div className={css.titleBar}>
                    <h1>My Photos</h1>
                </div>
                <div className={css.SearchResults}>
                    {savedPosts.map(post => (
                        // <div key={post.title} className={css.SearchItem}>
                        //     <p>Title: {post.title}</p>
                        //     <p>Artist: {post.name}</p>
                        //     <img src={post.image}></img>
                        //     <p>Description: {post.description}</p>
                        // </div>

                        <PostItemChallenge key={post.title} post={post} className={css.SearchItem}/>
                    ))}
                </div>
            </div>
        )
    }
}

export default ContentChallenge