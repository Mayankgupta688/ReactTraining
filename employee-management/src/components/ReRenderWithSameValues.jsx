import React from 'react';

export default class ReRenderWithSameValues extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank"
        }

        setInterval(() => {
            this.setState({
                name: "Mayank"
            })
        }, 2000)
    }

    render() {
        debugger;
        return <div>{this.state.name}</div>
    }
}