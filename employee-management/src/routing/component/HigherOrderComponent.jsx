import React from 'react';

class Manager extends React.Component {

    render() {
        this.props.alertFn()
        return <h1>This is Manager {this.props.user.desig} {this.props.user.age} {this.props.user.name}</h1>
    }
}

class HRComponent extends React.Component {

    render() {
        return <h1>This is HR Component {this.props.user.salary} {this.props.user.bonus} {this.props.user.name}</h1>
    }
}

function HigherOrderFunction(InputComp) {

    var userData = {
        name: "Mayank",
        age: 10,
        desig:"XYZ",
        salary: 10,
        bonus: 20
    }
   

    function alertData() {
        alert("Hello All")
    }

    return class extends React.Component {
        render() {
            return (
                <div>
                    <InputComp user={userData} alertFn={alertData}></InputComp>
                </div>
            )
        }
    }
}

export var ManagerComponent = HigherOrderFunction(Manager);

export var ResourceComponent = HigherOrderFunction(HRComponent);