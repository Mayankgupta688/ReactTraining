import React from 'react';

export default class ConditionalRendering extends React.Component {
    constructor() {
        super();
        this.state = {
            name: ""
        }

        setTimeout(() => {
            this.setState({
                name: "Mayank"
            })
        }, 5000)
    }

    // componentDidMount() {

    // }

    conditionalFunction() {
        if(this.state.name == "") {
            return <b>Hello Guest</b>
        } else {
            return <b>Hello {this.state.name}</b>
        }
    }

    render() {
        return (
            <div>
                {this.conditionalFunction()}
                <h4>This is Other Data...</h4>
            </div>
        )
    }
}