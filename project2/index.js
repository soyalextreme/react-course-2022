//! Imports needed in a real project
// import React from "react";
// import ReactDOM from "react-dom";

const element = (
    <div>
        <h3>List of benefits:</h3>
        <ul>
            <li>✔ Better Aim</li>
            <li>✔ Better Spray Controll</li>
            <li>✔ Become Radiant</li>
        </ul>
    </div>
);

const ElementReturnedFun = () => (
    <div>
        <h3>List of benefits:</h3>
        <ul>
            <li>✔ Better Aim</li>
            <li>✔ Better Spray Controll</li>
            <li>✔ Become Radiant</li>
        </ul>
    </div>
);




ReactDOM.render(element, document.querySelector("#root"));
