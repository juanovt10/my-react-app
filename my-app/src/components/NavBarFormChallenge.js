import React, { Component } from 'react'
import css from "./css/NavBarForm.module.css"
import NavBarChildChallenge from './NavBarChildChallenge'

export class NavBarFormChallenge extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn: true,
        }
    }

    handleClick = () => {
        this.setState(prevState => ({
            isLoggedIn: !prevState.isLoggedIn,
        }))
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                {this.state.isLoggedIn ? 
                    <button onClick={this.handleClick}>{this.state.isLoggedIn ? 'logout' : 'login'}</button> : ""
                }
                {this.state.isLoggedIn ? "": 
                    <NavBarChildChallenge 
                        isLoggedIn={this.state.isLoggedIn}
                    />
                }
            </div>
        )
    }
}

export default NavBarFormChallenge