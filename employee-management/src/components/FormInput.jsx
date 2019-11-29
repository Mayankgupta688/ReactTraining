import React from 'react';

export default class FormInput extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            userage: "",
            userdesig: "",
            usersalary: ""
        }
    }

    updateData = (ev) => {
        var output = ""
        if(ev.target.id == "username") {
            output = ev.target.value.toUpperCase()
        } else {
            output = ev.target.value
        }
        this.setState({
            [ev.target.id]: output
        })
    }

    updateDataProps(ev, data) {
        if(data == "user") {
            this.setState({
                username: ev.target.value
            })
        }
    }

    shouldComponentUpdate() {
        return false;
    }

    submitData = () => {
        alert(this.state.username)
        alert(this.state.userage)
        alert(this.state.userdesig)
        alert(this.state.usersalary)
    }

    render() {
        return (
            <div>
            <h3>User Forms</h3>
                User Name:   <input id="username" onChange={this.updateData} value={this.state.username} type="text" /><br></br><br></br>
                User Age:    <input id="userage" onChange={this.updateData} value={this.state.userage} type="text" /><br></br><br></br>
                User Desig:  <input id="userdesig" onChange={this.updateData} value={this.state.userdesig} type="text" /><br></br><br></br>
                User Salary: <input id="usersalary" onChange={this.updateData} value={this.state.usersalary} type="text" /><br></br><br></br>

                <input type="button" value="Click" onClick={this.submitData} />
            </div>
        )
    }
}