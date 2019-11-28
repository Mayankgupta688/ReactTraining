import React from 'react';

export default class SetStateisAsync extends React.Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    componentDidMount() {
        debugger;
        this.setState({
            counter: this.state.counter + 1
        }, () => {
            this.setState({
                counter: this.state.counter + 1
            }, () => {
                this.setState({
                    counter: this.state.counter + 1
                }, () => {
                    this.setState({
                        counter: this.state.counter + 1
                    })
                })
            })
        })
    }

    render() {
        return <h1>Counter: {this.state.counter} {this.state.name} {this.state.age}</h1>
    }
}