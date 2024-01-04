import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)
    
        // Here we start the variable name 
        // and we assign it to an empty string
        // for the caterogy one, as it is a selection
        // we put the default as website
        this.state = {
            name: '',
            category: 'website',
            comments: '',
        }
    }
    
    // event handler for react to capture the input name
    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    // event handler for react to capture the category selection
    handleCategoryChange = (event) => {
        this.setState({
            category: event.target.value
        })
    }

    // event handler for react to capture the text comments
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    // event handler to prevent standard form behavior
    // The console log will display the information inputed in json <3
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <h2>Please fill out the form</h2>
                {/* add onSubmit event handler to form */}
                <form onSubmit={this.handleSubmit}> 

                    {/* for the others is just adding the value
                    with the correct variable initiated in the constructor
                    and calling the event handler */}
                    <div>
                        <label htmlFor="id-name">Your Name:</label>
                        <input
                            value={this.state.name} 
                            onChange={this.handleNameChange}
                            id='id-name' 
                            type="text" 
                            name='name'
                        />
                    </div>
                    <div>
                        <label htmlFor="id-category">Query category:</label>
                        <select 
                            id='id-category' 
                            name='category'
                            value={this.state.category} 
                            onChange={this.handleCategoryChange}
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
                            value={this.state.comments} 
                            onChange={this.handleCommentsChange}
                            name='comments'
                        />
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm