import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

class NestingComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoaded: false,
            isLoggedIn: false,
        }
    }

    render() {
        return (
            <div>
                {/* What we did here was just split a complex Component
                into two small simpler components where debuggin is 
                easier can avoids the break down of the whole app */}
                <UserData isLoaded={this.state.isLoaded} />
                <UserMessage isLoggedIn={this.state.isLoggedIn} />
            </div>
        )
    }
}

export default NestingComponents