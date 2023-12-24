import React from "react";
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <header className="header-footer">
            <Link to={"/Loading"}>
                <h1 className="header-footer-text">Bienvenidos a CINEMA UNIR</h1>
            </Link>
        </header>
    );
}