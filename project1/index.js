const Element = () => (
    <div>
        <h3>List of benefits:</h3>
        <ul>
            <li>✔ Better Aim</li>
            <li>✔ Better Spray Controll</li>
            <li>✔ Become Radiant</li>
        </ul>
    </div>
);


// render params : 1st element to render, selector to place the element
ReactDOM.render(<Element />, document.querySelector("#root"));
