import React from "react";

export default function TimerComponent() {
    var currentCounter = new Date().getSeconds();
    return <h1>Counter {currentCounter}</h1>
}