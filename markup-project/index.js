// import React from "react";
// import ReactDOM from "react-dom";

const Content = () => (
    <section>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is mantained by Facebook</li>
            <li>Powes thousands of enterprise apps, including mobile apps</li>
        </ul>
    </section>
);


const Header = () => {

    const title = "Fun Fact about react";
    const imgInfo = {
        alt: "Logo React",
        src: "./static/react-logo.png"
    }

    return (
        <header>
            <img src={imgInfo.src} alt={imgInfo.alt} width="40px" />
            <h1>{title}</h1>
        </header>
    );
}


const Body = () => (
    <div>
        <Header />
        <Content />
    </div>
);

// render params : 1st element to render, selector to place the element
ReactDOM.render(<Body />, document.querySelector("#root"));
