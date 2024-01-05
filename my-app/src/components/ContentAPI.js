import React, { Component } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItemChallenge from './PostItemChallenge'
import LoaderChallenge from './LoaderChallenge'
import axios from 'axios'

class ContentChallenge extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            posts: [],
        }
    }
    // As soon the component is mounted trigger the
    // loadTimer method
    componentDidMount() {
        this.fetchImages()
        this.setState({
            posts: savedPosts,
        })
    }

    // method to change the state to true after 2s
    fetchImages() {
        axios.get
    }


    loadedTimer() {
        setTimeout(() => {
            this.setState({
                isLoaded: true
            })
        }, 2000)
    }

    handleFilterPosts = (event) => {
        // add the input values into a variable
        const inputAuthor = event.target.value.toLowerCase();

        // use the filter method using post as a variable
        // post will be each item of the savedPosts, then 
        // to access the author use .name (is name in the array)
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(inputAuthor)
        })
        
        // update the state
        this.setState({
            posts: filteredPosts,
        })


    }

    render() {
        return (

            <div>
                {this.state.isLoaded ? (
                    <div>
                        <div className={css.titleBar}>
                            <h1>My Photos</h1>
                            <form>
                                <label htmlFor="searchInput">Search:</label>
                                <input 
                                    onChange={(event) => this.handleFilterPosts(event)}
                                    id='searchInput' 
                                    type='search'
                                    placeholder='By Author'
                                />
                            </form>
                            <h4>posts found: {this.state.posts.length}</h4>
                        </div>
                        <div className={css.SearchResults}>
                            {this.state.posts.map(post => (
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