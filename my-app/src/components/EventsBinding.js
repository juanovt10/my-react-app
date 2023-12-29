import React, { Component } from 'react'

export class EventsBinding extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        
        // 3. event handler binded in constructor
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() {
    //     this.setState({
    //         introduction: "Goodbye!",
    //     });
    //     console.log(this.state.introduction)
    // }

    // 4. bind it by making it the handler an arrow function
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction)
    }


    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>

                {/* in class functions the handlers need to be binded to the component
                this can be done by: */}

                {/* 1. using an arrow function */}
                {/* <button onClick={() => this.handleClick()}> */}

                {/* 2. using the bind keyword */}
                {/* <button onClick={this.handleClick.bind(this)}> */}

                {/* 3. defining it in the constructor */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}    
                </button>
            </div>
        )
    }
}

export default EventsBinding