import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import DivComponent from "../components/DivComponent";
import FooterComponent from "../components/FooterComponent";

export default function ContainerComponent(props) {
    debugger;
    return (
        <div>
            <HeaderComponent userinfoname={props.name}></HeaderComponent>
            <DivComponent></DivComponent>
            <FooterComponent></FooterComponent>
        </div>
    )
}