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

    // shouldComponentUpdate() {
    //     return false;
    // }
    
    componentDidMount() {

        setTimeout(() => {
            this.setState({
                age: "50",
                name: "UPdated"
            })
            
        }, 2000);

        // setTimeout(() => {
        //     this.forceUpdate()
        // }, 5000);
    }

    render() {
        return (
            <div>
                <h1>This is Parent Component</h1>
                <h2>Welcome {this.state.name}</h2>
                <hr></hr>
                <ChildComponent user={this.state} ></ChildComponent>
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

class SubChildComponent extends React.Component {

    constructor() {
        super()
        this.state = {
            isUserUpdated: "false"
        }
    }

    componentDidMount() {
        this.setState({
            isUserUpdated: "true"
        })
    }

    shouldComponentUpdate(props) {
        
        if(props.user.name != this.props.user.name) {
            return true;
        } 
        return true;
    }

    render() {
        debugger;
        return (
            <div>
                <b>This is Child Component: {this.props.user.name} {this.state.isUserUpdated}</b><br></br><br></br>
                <input type="button" value="Click To Update Name" />
            </div>
        )
    }
}