import React from "react";
import "../inlinesStyle.css"

var backgroundColor = "green";

var applicationStyling = {
    "randomName": {
        "color": "red",
        "border": "1px solid black",
    }, "h2": {
        "padding": "5px"
    }
}

export default function CssVariables() {
    return (
        <div style={applicationStyling.randomName}>
            <h2 style={applicationStyling.h2}>Hello Mayank...</h2>
        </div>
    )
}