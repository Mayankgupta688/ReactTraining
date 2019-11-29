import React from 'react';

var simpleObject = {
    state: {
        name: "Anshul"
    }
}

export default class WorkingWithEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }

        setInterval(() => {
            this.setState({
                name: "Mayank"
            })
        }, 500)
    }
    

    render() {
        return (
            <div>
                <h1>Name: {this.state.name}</h1>
                <input type="button" onClick={this.clickButton.bind(this)} value="Click" />
            </div>
        )
    }
}