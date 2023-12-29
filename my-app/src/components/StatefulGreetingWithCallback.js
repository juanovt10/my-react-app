import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        // this always needs to be added
        super(props);

        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
            count: 0,   
        };
    };

    handleClick() {

        // set state is an asynchronous function
        // meaining that other code, in this case the last console logs
        // will display the previous states
        this.setState({

            //the this keyword refers to the current state if the
            // introduction state
            introduction: this.state.introduction === "Hello!" ? "Goodbye!": "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter": "Exit"
        }, () => {

            // This is a callback function, instead of running
            // simultaneously with the setState, it will run only 
            // after the setState is completed
            console.log("new state", this.state.introduction);
            console.log("new state", this.state.buttonText);
        });

        // this will be executed before the setState is finished
        console.log(this.state.introduction);
        console.log(this.state.buttonText);
    };

    increment() {
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.incrementFive()}>Increment Five</button>
                <p>You have clicked {this.state.count} times</p>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;