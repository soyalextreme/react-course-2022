
const NavBar = () => (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
);


const element = (
    <div>
        <NavBar />
    </div>
)

ReactDOM.render(element, document.querySelector("#root"))