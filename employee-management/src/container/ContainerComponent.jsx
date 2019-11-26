import React from "react";

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

 export function HeaderComponent(props) {
    return <h1>This is Header Page for {props.userinfoname}.........</h1>
}

 export function DivComponent() {
    return <h1>This is Div Page.........</h1>
}

export function FooterComponent() {
    return <h1>This is Footer Page.........</h1>
}
