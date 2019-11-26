import React from 'react';

export default class TimerClassComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: new Date().getSeconds(),
            name: "Mayank"
        }
        setInterval(() => {
            this.setState({
                timer: new Date().getSeconds(),
                counter: 0
            })  
        }, 1000);
    }

    componentDidMount() {
        this.setState({
            counter: this.state.counter + 1
        })
        
    }

    render() {
        return (
            <div>
                <h1>This is the New Counter {this.state.name}:</h1>
                <h1>Counter: {this.state.timer}</h1>
            </div>
            
        )
    }
}