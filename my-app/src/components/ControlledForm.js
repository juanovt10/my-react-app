import React, { Component } from 'react'

export class ControlledForm extends Component {

    constructor(props) {
        super(props)
    
        // Here we start the variable name 
        // and we assign it to an empty string
        this.state = {
            name: ''
        }
    }
    
    // this event handler must need an event
    // as there is something going on in the input file
    handleNameChange = (event) => {
        this.setState({
            // this basically updates the input
            // event is the typing, target is what it needs to do
            // value is what it needs to update
            name: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    {/* standard input label
                    just note that the for word is reserved in JS
                    so we need to use the htmlFor */}
                    <label htmlFor="id-name">Your Name:</label>
                    {/* this is the text field, the value is the name
                    then the event listener is the onChange that calls
                    the method. Then the standard type, name and id */}
                    <input
                        value={this.state.name} 
                        onChange={this.handleNameChange}
                        id='id-name' 
                        type="text" 
                        name='name'
                    />
                    {/* standard submit button */}
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default ControlledForm