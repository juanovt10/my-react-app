import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) {
        // this always needs to be added
        super(props);

        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",            
        };
    };

    render () {
        return (
            <div>
                <h1>{this.state.introduction}</h1>
                <button>{this.state.buttonText}</button>
            </div>
        )
    }
}

export default StatefulGreeting;