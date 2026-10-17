// how to convert nested element inside div and nested div
/*
* <div id ="parent">
<div id="child1">
<h1> I am h1 tag</h1>
<h2> I am h1 tag</h2>
</div>

<div id="child2">
<h1> I am h1 tag</h1>
<h2> I am h1 tag</h2>
</div>
</div>
*
* ReactElement(Object) =>HTML(Browser Understand)
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [

    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "this is namaste react"),
        React.createElement("h2", {}, "I am a h2 tag"),
    ]),

    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "I am an h1 tag"),
        React.createElement("h2", {}, "I am a h2 tag"),
    ]),

]);

// const heading = React.createElement("h1", 
//     { id: "heading",xyz:"abc" },
//     "Hello World from React"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root")); // it create root and it uses Domdocument


root.render(parent);// it return object and then convert into html tag
