import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => ReactElement-JS Object => HTML element(render)
const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Namaste React"
);

//JSX (transpile4d before it reaches the JS) - PARCEL - Babel

//!JSX => React.createElement =>  ReactElement-JS Object => HTML element(render)
const jsxHeading = (
    <h1 className="head" id="heading">
        Namaste React Using JSX
    </h1>
)  //this is same as uppeer code from 6 to 10 using jsx

/* Functonal component
const Title = () =>(
  <h1 className="head"> Namaste React Componet Passing in other component</h1>
)
*/
//!React Functional Component  syntax
const HeadingComponent = () => (
    <div id="container">
    
        {/* <Title/>                     Here we can also pass direct component in other component and is called component composition */}
        {jsxHeading}                     here we can also put react element in  component
        <h1 className="heading">Namaste React Functional component</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(jsxHeading);
root.render(<HeadingComponent />)  // Rendering component syntax