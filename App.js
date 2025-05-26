import React from "react";
import ReactDOM from 'react-dom/client';

// React Element (DOM element) => object => HTML

// const heading = React.createElement("h1", {id:"heading1"}, "Im here") // React element not html element, creates an object
// console.log(heading);


//jsx
const heading = (<h1 className="head" tabIndex="1">
    Hello World
</h1>); // this is not html inside js, this is jsx // creating react element using jsx

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
root.render(heading)



