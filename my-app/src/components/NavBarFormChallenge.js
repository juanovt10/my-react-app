import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"

export class NavBarFormChallenge extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true,
        }
    }

    handleClick = () => {
        this.setState({
            isLoggedIn: false,
        })
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <button onClick={this.handleClick}>Login</button>        
            </div>
        )
    }
}

export default NavBarFormChallenge