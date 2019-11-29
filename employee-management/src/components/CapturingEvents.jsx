import React from 'react';

window.clickBuuton = function(even) {
    debugger;
    console.log(this.state.name)
}

var obj = {
    state: {
        name: "Mayank Gupta"
    }
}

export default class CapturingEvents extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }
        this.clickBuuton = window.clickBuuton.bind(obj)
        this.otherClick = window.clickBuuton.bind(this)
    }

    render() {
        return (
            <div>
                <h1>User Name: {this.state.name}</h1>
                <input type="button" onClick={this.clickBuuton} id="firstButton" value="First Click" /><br></br><br></br>
                <input type="button" onClick={this.otherClick} id="secondButton" value="Second Click" />
            </div>
        )
    }
}