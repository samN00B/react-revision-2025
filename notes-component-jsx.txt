import React from "react";
import ReactDOM from 'react-dom/client';

//jsx // React Element

const heading1 = <span>Hello World  </span>

const heading = (<h1 className="head" tabIndex="1">
    {heading1}
    Hello India
</h1>); // this is not html inside js, this is jsx // creating react element using jsx

// React functional Componenets
const TitleComponent = () => {
    return <h1>React Functional Title</h1>;
}

function handleClick() {
  alert("Clicked!");
}

const number = 12;

// const data = api.getData();

const HeadingComponent2 = () => (

    <div className="container">
        <h2>{number} "-" {100 + 200}</h2>
        {heading}
        {/* {data} -> jsx will prevent cross site scripting if any api is sending any melicious data*/}
        <TitleComponent />
        {TitleComponent()}
        <TitleComponent></TitleComponent>
        <h1 className="head">React Functional Componenets</h1>
        <button onClick={handleClick}>Click Me</button>
    </div>
);


const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)
root.render(<HeadingComponent2 />)



