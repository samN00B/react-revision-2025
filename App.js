
const heading = React.createElement("h1", {id:"heading"}, "Hello from React!!");
const button = React.createElement("button", {onClick: () => alert("I'm Done"), id:"b1"}, "Click Here!!")

console.log(heading); //object

// Wrap both in a parent element
const container = React.createElement("div", null, heading, button);

// passing null or {} in props
// null	- No props at all
// {}	- Empty props (an empty object)

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);



// example nested html structure inside react 

/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *       </div>
 * </div>
 * 
 * ReactElement(objcet) => HTMl(Browser understand)
 */

// ---------------code-------------


// const parentDIV = React.createElement(
//     "div", 
//     {id:"parent"}, 
//     React.createElement(
//         "div", 
//         {id:"child"}, 
//         [React.createElement(
//             "h1", 
//             {}, 
//             "header1"
//         ),
//         React.createElement(
//             "h1", 
//             {}, 
//             "header2"
//         ),]
//     )
// );

//Notes if we pass siblings/children in array or not - both works same gives same o/p
/**
 *
    Notice ...children is rest parameters — this means you can pass:

    A single child: React.createElement("div", {}, child)
    Multiple children: React.createElement("div", {}, child1, child2, child3)
    An array of children: React.createElement("div", {}, [child1, child2, child3])

    Whether you pass the children as individual arguments or as an array, React will normalize them.
    Use an array if you're dynamically generating elements, like with .map():
 */

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parentDIV)

// ------------more nested structure------------
/**
 * 
 * <div id="parent">
 *      <div id="child">
 *          <h1>Header1</h1>
 *       </div>
 *      <div id="child2">
 *          <h1>Header2</h1>
 *       </div>
 * </div>
 * 
 * ReactElement(objcet) => HTMl(Browser understand)
 */


// ------code--------


const parentDIV = React.createElement(
    "div",
    {id:"parent"},
    [
        React.createElement(
            "div",
            {id:"child1"},
            React.createElement(
                "h1",
                {},
                "Heading1"
            )
        ),
        React.createElement(
            "div",
            {id:"child2"},
            React.createElement(
                "h1",
                {},
                "Heading2"
            )
        ),

    ]

)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parentDIV)

//this is too hard to read thats why we need JSX