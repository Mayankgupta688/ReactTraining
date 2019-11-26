import React from 'react';

export default class ClassComponent extends React.Component {

    constructor() {
        this.state = {
            name: "MAyank",
            age: 10
        }
        super();
        
    }

    render() {
        return <h1>Hello World.. {this.state.name} {this.state.age}</h1>
    }
}