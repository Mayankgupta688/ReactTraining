import React from 'react';

export default class SetStateImmutableComplex extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {
                name: "Mayank",
                age: 10
            }
        }
    }

    componentDidMount() {
        var initialReference = this.state;
        this.setState({
            desig: "Xyz",
            user: {
                ...this.state.user
            }
        }, () => {
            alert(this.state.user == initialReference.user)
        })
    }

    render() {
        return <div>Data with Reference..</div>
    }
}