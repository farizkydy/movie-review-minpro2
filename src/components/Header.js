import React from "react"
import "../assets/styles/Header.scss"

const Header = () => {
    return(
        <React.Fragment>
            <div className="header">
                <h1><span className="header-title">MOVIE</span> HUB</h1>
                <input placeholder="search movie"></input>
                <h2>Sign In</h2>
            </div>
        </React.Fragment>
    )
}

export default Header;
            