import React from 'react';

export default class StateVariablesAreMerged extends React.Component {

    componentDidMount() {
        this.setState({
            name: "Updated",
            desig: "Xyz",
            age: 10
        })
    }

    render() {
        return <div>Helo {this.state?this.state.name: ""}, Age: {this.state?this.state.age:""}</div>
    }
}