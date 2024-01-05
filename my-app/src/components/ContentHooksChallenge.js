import React, { useState, useEffect } from 'react'
import css from "./css/Content.module.css"
import {savedPosts} from "../posts.json"
import PostItemChallenge from './PostItemChallenge'
import LoaderChallenge from './LoaderChallenge'

function ContentHooksChallenge() {
    // define the states and their default values
    const [isLoaded, setIsLoaded] = useState(false);
    const [fetchedPosts, setFetchedPosts] = useState([]);

    useEffect(() => {
        // define the timerId and assign it the setTimeout arrow function
        // within the funtction use the setStates defined above to change the states
        // apply a 2s timer
        // use the return function to clear the timer
        // use the empty array to only run the useEffect once
        const timerId = setTimeout(() => {
            setIsLoaded(true);
            setFetchedPosts(savedPosts)
        }, 2000);
        return () => clearTimeout(timerId)
    }, [])

    // define the event handler with the const keyword 
    // assign the event and then the arrrow function
    // the rest is the same, get the input value and assign it to inputAuthor
    // define filteredPost and assing the savedPost with the filter method
    // then just call the fetchPost state change function and assing the 
    // filtered post value
    const handleFilterPosts = (event) => {
        const inputAuthor = event.target.value.toLowerCase();
        const filteredPosts = savedPosts.filter(post => {
            return post.name.toLowerCase().includes(inputAuthor)
        })
        setFetchedPosts(filteredPosts)
    }

    return (
        <div>
            {isLoaded ? (
                <div>
                    <div className={css.titleBar}>
                        <h1>My Photos</h1>
                        <form>
                            <label htmlFor="searchInput">Search:</label>
                                <input 
                                    onChange={(event) => handleFilterPosts(event)}
                                    id='searchInput' 
                                    type='search'
                                    placeholder='By Author'
                                />
                        </form>
                        <h4>posts found: {fetchedPosts.length}</h4>
                    </div>
                    <div className={css.SearchResults}>
                        {fetchedPosts.map(post => (
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

export default ContentHooksChallenge
