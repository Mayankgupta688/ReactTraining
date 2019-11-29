import React from "react";
import ReactDOM from "react-dom";

import {ManagerComponent, ResourceComponent} from "./routing/component/HigherOrderComponent"

import ApplicationContainer from "./routing/containers/ApplicationContainer"

ReactDOM.render(<ManagerComponent></ManagerComponent>, document.getElementById("root"))