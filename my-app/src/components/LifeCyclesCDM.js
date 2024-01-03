import React, { Component } from 'react'
import LifeCyclesCDMChild from './LifeCyclesCDMChild'

export class LifeCyclesCDM extends Component {

    // This is called first, regardless if it has child or not
    constructor(props) {
        console.log('constructor called')

        super(props)
    
        this.state = {
            data: "loading"
        }
    }

    // This is called after 3s (#4)

    // When using a child component this is step (#8)
    // Here the step is called by the componentDidMount method

    // This is called again after the 3s #11
    getData() {
        console.log('Data fetched!')
        setTimeout(() => {
            this.setState({
                data: 'loaded'
            })
        }, 3000)
    }

    // This will happend 3rd, as everything else is complete
    // Then it will call the get data method

    // when using a child component, this will be step (#7)
    // The reason is that the parent component won't be mounted
    // until all the childs have been mounted
    componentDidMount() {
        console.log('component mounted!')
        this.getData()
    }

    // Rendering will occur on second place, 
    // mainly due that the other components will take time
    // 3s to "act"

    // After the data is fetched, the component will re-render
    // As its state was updated.

    // If the parent component has a child, this still will be
    // the #2 step. 

    // #12 as the update of the state will make the parent re render


    render() {
        console.log('render method called')
        return (
            <div>
                <h1>{this.state.data}</h1>
                <LifeCyclesCDMChild />
            </div>
        )
    }
}

export default LifeCyclesCDM