// import React from "react";
// import ReactDOM from "react-dom";

const Nav = () => {
    const navElements = ["Pricing", "Contact", "About Us"]

    return (
        <nav className="Nav">
            <ul className="Nav-List">
                {navElements.map(element => <li className="Nav-List__element">{element}</li>)}
            </ul>
        </nav>
    );
}


const Footer = () => (
    <footer className="Footer">
        <small className="Footer__content">
            2022 Alejandro Andrade Dev, All rights reserved.
        </small>
    </footer>
);


function Header() {
    return (
        <header className="Header">
            <div className="Header-Logo">
                <img src="./static/react-logo.png" alt="react-logo" />
            </div>
            <Nav />
        </header>
    );
}


const ListOfReasons = () => (
    <ol className="MainContent-List">
        <li className="MainContent-List__element">I want to become better programmer</li>
        <li className="MainContent-List__element">I want to build awesome websites</li>
        <li className="MainContent-List__element">I want to have good bases for React Native</li>
        <li className="MainContent-List__element">I want to have a job and have good earnings</li>
    </ol>
);


const MainContent = () => (
    <section className="MainContent">
        <h1>Reasons I want to learn React!</h1>
        <ListOfReasons />
    </section>
);

function Root() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}


ReactDOM.render(<Root />, document.querySelector("#root"))