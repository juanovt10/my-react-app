import React from 'react'

export default function Books(props) {

    // here we create a variable to grab the props
    // that will be injected in the parent component
    const book = props.book

    return (

        // here is the same as before, just use the 
        // dot notaiton to access each object item in the the 
        // list of books
        <div>
            <h5>{book.title}</h5>
            <p>{book.author}</p>
            <p>{book.pages}</p>
        </div>
    )
}
