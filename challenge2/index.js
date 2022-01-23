// import React from "react";
// import ReactDOM from "react-dom";


function Header() {
    return (
        <header>
            <h1>Reasons I want to learn React!</h1>
        </header>
    );
}


const ListOfReasons = () => (
    <ol>
        <li>I want to become better programmer</li>
        <li>I want to build awesome websites</li>
        <li>I want to have good bases for React Native</li>
        <li>I want to have a job and have good earnings</li>
    </ol>
);


function Root() {
    return (
        <div>
            <Header />
            <section>
                <ListOfReasons />
            </section>
        </div>
    );
}


ReactDOM.render(<Root />, document.querySelector("#root"))