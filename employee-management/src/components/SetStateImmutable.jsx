import React from 'react';

export default class SetStateImmutable extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "M",
            age: 10
        }
    }

    componentDidMount() {
        var initialReference = this.state;
        this.setState({
            desig: "Xyz"
        }, () => {
            console.dir(initialReference)
            alert(this.state == initialReference)
            console.dir(this.state)
        })
    }

    render() {
        return <div>Data with Reference..</div>
    }
}