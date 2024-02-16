import React from "react";
import  ReactDOM from "react-dom/client";
       



 const Heading = function () {
    return <h1 className="heading">Namaste React from JSX 🏆</h1>
 } 
 const Heading2 = () => (
     <>
    <Heading />
    <h2 id="heading2">Heading2 from functional component 🧘‍♀️</h2>
    </>
 );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading2 />);
               