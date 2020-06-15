import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FooterComponent from './FooterComponent';
import { login } from "../store/actions/auth";
import "../assets/sass/LoginForm.scss"

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const LoginForm = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatchEvent = useDispatch()
    const isAuthenticate = useSelector(state => state.auth.isAuthenticate)

    const submit = e => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        dispatchEvent(login(userData))
        props.history.push("/description")
    }
    return (
        <Router>
            <div style={{ width: "70%" }} className="login-content">
                <div className="login-content__logo">
                    <h1><span className="header-title">MOVIE</span> HUB</h1>
                </div>
                <div className="login-form">
                    <form onSubmit={submit}>
                        <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email" />
                        <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your Password" />
                        <button style={{ backgroundColor: "#ffa31a" }}>login</button>
                    </form>
                </div>
                <div className="footer">
                    <FooterComponent style={{ width: "70%" }} />
                </div>
            </div>


        </Router >
    )
}
export default LoginForm;

