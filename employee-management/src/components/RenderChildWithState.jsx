import React from 'react';
import { tsParenthesizedType } from '@babel/types';

export default class RenderChildWithState extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "Mayank",
            age: 10
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: "Updated"
            })
        }, 4000);
    }

    render() {
        return (
            <div>
                <h1>This is Parent Component</h1>
                <h2>Welcome {this.state.name}</h2>
                <hr></hr>
                <ChildComponent user={this.state}></ChildComponent>
            </div>
        )
    }
}

function ChildComponent(props) {
    return (
        <div>
            <h3>Other Child</h3><hr></hr>
            <SubChildComponent user={props.user}></SubChildComponent>
        </div>
    )
}

function SubChildComponent(props) {
    return (
        <div>
            <b>This is Child Component: {props.user.name}</b><br></br>
            <input type="button" value="Click To Update Name" />
        </div>
    )
}