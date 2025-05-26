import React from "react";
import ReactDOM from 'react-dom/client';

const parentDIV = React.createElement(
    "div", {id:"parent"},[
        React.createElement("div", 
            {id:"child1"},
            React.createElement("h1", {}, "Heading1"),
            React.createElement("h2", {}, "Heading2")
        ),
        React.createElement(
            "div",
            {id:"child2"},
            React.createElement("h1", {}, "Heading2"),
            React.createElement("h2", {}, "Heading2")
        ),

    ]

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDIV)
