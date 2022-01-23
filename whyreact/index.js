
const element = <h1 className="element" id="element-id">Hello Im H1</h1>

// Composability
const MainContent = () => (
    <h1 className="header">Hi! Im learning react</h1>
);

// JSX just returns a html object.
console.log(MainContent());

// render params : 1st element to render, selector to place the element
ReactDOM.render(MainContent(), document.querySelector("#root"));


// const root = document.querySelector("#root");
// const h1 = document.createElement("h1");
// h1.textContent = "Imperative way to code";
// h1.className = "header"

// root.append(h1);


// console.log(element);
