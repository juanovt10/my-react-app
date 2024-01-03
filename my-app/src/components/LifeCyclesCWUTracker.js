import React, { Component } from 'react'

export class LifeCyclesCWUTracker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mouseX: 0,
      mouseY: 0,
    }
  }
  trackMouse = e => {
    console.log('Mouse moved')
    this.setState({
      mouseX: e.clientX,
      mouseY: e.clientY,
    })
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.trackMouse);
  }

  // In a nutshell, what happens is that in the parent component
  // this component is called, and is in charge of tracking the 
  // mouse. The problem is that the button of the parent will make
  // this component dissapear (unmount), therefore, we need to 
  // remove the event listener becasue as an unmointed component
  // for React it does not exist
  componentWillUnmount() {
    console.log('unmounting')
    window.removeEventListener('mousemove', this.trackMouse)
  }
  render() {
    return (
      <div>
        <h1>Tracking Mouse...</h1>
        <p>X: {this.state.mouseX} Y: {this.state.mouseY}</p>
      </div>
    )
  }
}

export default LifeCyclesCWUTracker