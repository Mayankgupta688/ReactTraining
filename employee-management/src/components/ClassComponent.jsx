import React from 'react';

export default class ClassComponent extends React.Component {

    constructor() {
        super();
        this.state = {
            name: "MAyank",
            age: 10
        }
    }

    render() {
        return <h1>Hello World.. {this.state.name} {this.state.age}</h1>
    }
}