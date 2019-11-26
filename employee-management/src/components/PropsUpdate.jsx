import React from "react";

export default function PropsUpdate(props) {
    props.userdetails.name = "Anshul";
    return <h1>Hello {props.userdetails.name}</h1>
}