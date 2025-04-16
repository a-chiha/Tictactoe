import React from "react";
import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };
    return (

        <nav className="navbar">
            <div className="menu-icon" onClick={handleShowNavbar}>
                <Hamburger />
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
                <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li >
                        <NavLink to="/game">Game</NavLink>

                    </li>
                    <li>
                        <NavLink to="/scoreboard">Scoreboard</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
const Hamburger = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="52"
        height="24"
        viewBox="0 0 52 24"
    >
        <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
            <rect
                id="Rectangle_3"
                data-name="Rectangle 3"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 47)"
                fill="#574c4c"
            />
            <rect
                id="Rectangle_5"
                data-name="Rectangle 5"
                width="42"
                height="4"
                rx="2"
                transform="translate(304 67)"
                fill="#574c4c"
            />
            <rect
                id="Rectangle_4"
                data-name="Rectangle 4"
                width="52"
                height="4"
                rx="2"
                transform="translate(294 57)"
                fill="#574c4c"
            />
        </g>
    </svg>

);
export default Navbar;