import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/sass/HeaderComponent.scss";

const HeaderComponent = () => {
    return (
        <React.Fragment>
            <div className="header">
                <h1><span className="header-title">MOVIE</span> HUB</h1>
                <input placeholder="search movie"></input>
                <h2>Sign In</h2>
            </div>
        </React.Fragment>

    )
}

export default HeaderComponent;
