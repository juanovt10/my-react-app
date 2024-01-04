import React, { Component } from 'react'
import importedNames from '../names'

export class SearchBar extends Component {
    constructor(props) {
        super(props)
    
        // Initiate the names state with all the names
        // from the imported names list
        this.state = {
            names: importedNames,
        }
    }

    handleChange = (event) => {
        // here we define the text that is inputed into 
        // the input field 
        const inputText = event.target.value.toLowerCase();
        console.log(inputText)
        // Here we get the define the filtered names, this is 
        // equal to the whole list with the filter method attached
        // the filter method is an arrow function that accepts name
        // as a parameter (that is why the syntax is weird)
        // More tradictional definition of the function would be:
        // filteredFunction = (name) => {
        //     return name.toLowerCase().includes(inputText)
        // }
        // and then add .filter(filteredFunction)
        // the return of the function is the name in lower case 
        // and needs to include the values typed in the the input text
        const filteredNames = importedNames.filter(name => {
            return name.toLowerCase().includes(inputText)
        })
        // This just update the state of the names with the new filtered names
        this.setState({
            names: filteredNames,
        })
        console.log(filteredNames) 
    }

    render() {
        return (
            <div>
                <h1>Name Search</h1>
                <p>matching names found: {this.state.names.length}</p>
                <form>
                    <input 
                        id='id-name' 
                        name='name' 
                        placeholder='search name...'
                        type='text'
                        onChange={(event) => this.handleChange(event)}
                    />
                    <div style={{margin: 'auto'}}>
                        {/* use the map method to map all the 
                        names in the current names state */}
                        {this.state.names.map(name => {
                            return (
                                <p key={name}>{name}</p>
                            )
                        })}
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar