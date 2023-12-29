import React from "react";
import css from "./css/NavBarSimple.module.css";

class NavBarSimpleChallenge extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: "Hello, guest!",
            signUpButton: "log in",
        }
    }

    handleClick() {
        this.setState((prevState, prevProps) => {
            console.log("Previous State: ", prevState)
            console.log("Previous Props: ", prevProps)
            return {
                message: prevState.message === "Hello, guest!" ? "Welcome back, user!": "Hello, guest!",
                signUpButton: prevState.signUpButton === "log in" ? "log out": "log in",
            }
        })
    }

    render () {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <div>
                    <span>{this.state.message}</span>
                    <button onClick={() => this.handleClick()}>{this.state.signUpButton}</button>
                </div>
            </div>
        )
    };
}

export default NavBarSimpleChallenge