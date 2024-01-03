import React, { Component } from 'react'

export class LifeCyclesCDUChild extends Component {

    // This is #3 as the render of the parent will ask to render the child
    constructor(props) {
        console.log('Child Constructor called');
        super(props)

        this.state = {
            greeting: 'Child Hello!',
        }
    }


    // If this is called before the parent (as it is a click), 
    // then it will be #5 
    updateGreeting = () => {
        console.log('Child updateGreeting called');
        this.setState((prevState) => {
            return {
                greeting: prevState.greeting === 'Child Hello!' ? 'Child Goodbye' : 'Child Hello!',
            }
        })
    }


    // This is #7 after the update is rendered

    // Regardless if the child was visibly updated of not, the 
    // component did update method is called becasue the parent was rerendered
    componentDidUpdate(prevProps, prevState) {
        console.log('Child Component updated!');
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.parentGreeting !== this.props.parentGreeting) {
            console.log('Parent greeting has changed!');
        }
    }

    // This will be #4 as the parent was rendered then the child needs to be
    // rendered after the constructor 

    // This will be #6 as the child needs to rerender after the greeting is updated

    // If the parent greeting is first, this is called after the render of
    // the parent as all the children need to be rendered
    render() {
        console.log('Child Render method called');
        return (
            <div>
                <h1>{this.state.greeting}</h1>
                <button onClick={this.updateGreeting}>Update Child Greeting</button>
            </div>
        )
    }
}

export default LifeCyclesCDUChild