import React from 'react';

export default class SyncSetState extends React.Component {

    state = {
        counter: 0
    }

    updateDataRandom = (state) => {
        return {
            counter: state.count + 10
        }   
    }

    updateData = (state) => {
        return {
            counter: 10
        }   
    }

    componentDidMount() {
        this.setState(this.updateDataRandom)
        this.setState(this.updateData)
    }

    

    render() {
        debugger;
        return <h1>Counter: {this.state.counter} {this.state.name} {this.state.age}</h1>
    }
}