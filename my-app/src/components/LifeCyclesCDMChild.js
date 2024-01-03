
import React, { Component } from 'react'

export class LifeCyclesCDMChild extends Component {

  // This will be called (#3) as the parent component 
  // was rendered, therefore it called the chil component
  constructor(props) {
    console.log('Child Constructor Called')
    super(props)

    this.state = {
      data: 'Child Loading...',
    }
  }

  // This will be step (#6) as the componendDidMount() 
  // called the getData() method

  // After this will be step #9 as the 3s have passed and the 
  // data has been fetched
  getData() {
    console.log('Child getData() called')
    setTimeout(() => {
      console.log('Child Data fetched!')
      this.setState({
        data: 'Child Loaded!'
      })
    }, 3000)
  }

  // This will be step (#5), as this is the next
  // step in the child component after rendering
  componentDidMount() {
    console.log('Child Component mounted')
    this.getData();
  }

  // This is step (#4) as after the constructor is set,
  // the render method will be called

  // Here is step #10 as after the data has been fetched
  // the component has updated, meaning that it needs to be 
  // rerendered 

  // #13 as after the parent re-render it will have to re-render 
  // all of its childres
  render() {
    console.log('Child Render method called')
    return (
      <div>
        <h1>{this.state.data}</h1>
      </div>
    )
  }
}

export default LifeCyclesCDMChild