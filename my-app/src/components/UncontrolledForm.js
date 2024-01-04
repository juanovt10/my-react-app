import React, { Component } from 'react'

export class UncontrolledForm extends Component {


    constructor(props) {
        super(props)
        // Here we create the refs 
        this.inputName = React.createRef();
        this.category = React.createRef();
        this.textComment = React.createRef();
    }
    

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.inputName.current.value)
        console.log(this.category.current.value)
        console.log(this.textComment.current.value)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form</h2>
                <form onSubmit={this.handleSubmit}> 
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            id='id-name' 
                            type="text" 
                            name='name'
                            // here we add the ref 
                            ref={this.inputName}
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select 
                            id='id-category' 
                            name='category'
                            ref={this.category}
                        >
                            <option value='website'>Website issue</option>
                            <option value='order'>Order issue</option>
                            <option value='general'>General enquiry</option>

                        </select>
                    </div>
                    <div>
                        <label htmlFor="id-category">Comments:</label>
                        <textarea 
                            id='id-comments' 
                            name='comments'
                            ref={this.textComment}
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UncontrolledForm