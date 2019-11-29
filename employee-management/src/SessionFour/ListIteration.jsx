import React from 'react';
import axios from "axios";

export default class ListIteration extends React.Component {

    constructor() {
        super();
        this.state = {
            filterValues: ""
        }
    }

    componentDidMount() {
        axios.get("http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees").then((res) => {
            this.setState({
                empList: res.data
            })
        })
    }

    iterateList() {
        if(this.state && this.state.empList) {
            return this.state.empList.map((emp) => {
                return (
                    <div key={emp.id + "_" + emp.name}>
                        <h1>User Name: {emp.name}</h1>
                        <h2>User Id: {emp.id}</h2>
                        <img src={emp.avatar} alt={emp.name} /><br></br>
                        <input type="text" /><hr></hr>
                    </div>
                )
            })
        } else {
            return <h1>No Data Available</h1>
        }
        
    }

    filterEmployee = () => {
        debugger;

        let filteredList = this.state.empList.filter((emp) => emp.name.indexOf(this.state.filterValues) > -1)

        this.setState({
            empList: filteredList
        })
    }

    updateTextData = (even) => {
        this.setState({
            filterValues: even.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.filterValues} onChange={this.updateTextData} /><br></br>
                <input type="button" value="Filter" onClick={this.filterEmployee} />
                {this.iterateList()}
            </div>
        )
    }
}