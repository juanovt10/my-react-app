import React from 'react'
import Books from './Books'

export default function RenderingLists() {

    // this is an example of a list
    const booklist = [
        'to kill a mockingbird',
        'the great gatsby',
        'the catcher in the rye',
        ]
  
    const books = [
        {
            title: 'to kill a mockingbird',
            author: 'harper lee',
            pages: 281
        },
        {
            title: 'the greate gatsby',
            author: 'f. scott fitzgerald',
            pages: 218
        },
        {
            title: 'the catcher in the rye',
            author: 'j. d. salinger',
            pages: 234
        }
    ]

    return (
        <div>
            {/* here we use the map method to iterate in the bookilist list
            then we use the book as the i in vainilla js and it should 
            return each list item wrapped in a <h2> element */}
            {booklist.map(book => {
                return <h2 key={book}>{book}</h2>
            })}
            <hr />

            {
                // here it uses the map function to loop around the book list
                books.map(book => {
                    return (
                        <div key={book.title}>
                            {/* using the dot notation access each object thing */}
                            <h5>{book.title}</h5>     
                            <p>{book.author}</p>
                            <p>{book.pages}</p>
                        </div>
                    )
                })
            }
            <hr />
            
            {
                // here instead of writing the component in here
                // we extract it from a child component. 
                // We just add a prop called books that is equal to the books parameter 
                // of the arrow function
                books.map(book => {
                    return <Books key={book.title} book={book} />
                })
            }

        </div>
  )
}
