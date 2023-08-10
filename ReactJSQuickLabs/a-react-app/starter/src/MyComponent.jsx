import React from "react";
import AnotherComponent from "./AnotherComponent";
import MyClassComponent from "./MyClassComponent";
import ComponentWithProps from "./ComponentWithProps";


const MyComponent = () => {
    return (
        <>
         <h1>Hello World</h1>
         <AnotherComponent />
         <MyClassComponent />
         <ComponentWithProps/>
         <ComponentWithProps header="Header passed from props" content="Content passed from props" number={10}/>
        </>
    )
};

export default MyComponent; 
