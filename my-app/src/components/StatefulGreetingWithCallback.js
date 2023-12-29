import React from "react";

class StatefulGreetingWithCallback extends React.Component {

    constructor(props) {
        // this always needs to be added
        super(props);

        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",            
        };
    };

    handleClick() {

        // set state is an asynchronous function
        // meaining that other code, in this case the last console logs
        // will display the previous states
        this.setState({
            introduction: "Goodbye",
            buttonText: "Enter",
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

    render () {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreetingWithCallback;