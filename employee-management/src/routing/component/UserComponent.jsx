import React from 'react';

export default class UserComponent extends React.Component {
    render() {
        debugger;
        return (
            <div>
                <h1>User Details: {this.props.match.params.id}</h1>
                <h1>User Details: {this.props.match.params.name}</h1>
            </div>
        )
    }
}