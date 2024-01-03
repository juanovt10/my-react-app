import React, { Component } from 'react'
import LifeCyclesCDUChild from './LifeCyclesCDUChild'

export class LifeCyclesCDU extends Component {

    // This is always #1
    constructor(props) {

        console.log('Constructor called!')
        super(props)
    
        this.state = {
            greeting: 'Hello!'
        }
    }

    // When only parent, and after the button is clicked,
    // This method is called #3

    // When children, this is called after all the components are 
    // rendered. Then this will trigger the update 
    updateGreeting = () => {
        console.log('Update greeting called!')
        this.setState(prevState => {
            return {
                greeting: prevState.greeting === 'Hello!' ? 'Goodbye!': 'Hello!'
            }
        })
    }

    // Finally, #5 as after the component renders the update

    // This will be called after the child component is updated
    componentDidUpdate() {
        console.log('Component updated1')
    }

    // When only parent, this is #2 after the constructor is called
    
    // After the updateGreeting() is called, this is #4 as the compoennt
    // needs to be rerendered after the state changed


    // When having children, this is called #2 to render after the constructor
    // After the greeting is triggered, the component renders the update
    render() {
        console.log('render method called!')
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Greeting</button>
                <LifeCyclesCDUChild parentGreeting={this.state.greeting}/>
            </div>
        )
    }
}

export default LifeCyclesCDU