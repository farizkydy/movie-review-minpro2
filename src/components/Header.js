import React, {useState} from "react"
import{useDispatch, useSelector} from "react-redux"
import "../assets/styles/Header.scss"
import { movieAction } from "../store/actions/homepageAction"
import {Link} from "react-router-dom"

const Header = () => {
    const [input, setInput] = useState("")

    const dispatch = useDispatch()

    const isAuthenticate = useSelector(state =>state.auth.isAuthenticate)

    const name = useSelector(state=> state.homepage.name)
    return(
        <React.Fragment>
            <div className="header">
                <Link to="/"><h1><span className="header-title">MOVIE</span> HUB</h1></Link>
                <input type="text" placeholder="search movie" onChange={(search)=> {
                    // setInput(search.target.value)
                    dispatch(movieAction(search.target.value))
                    }}></input>
                <h1>{input}</h1>
                <h1>{name}</h1>
                <h2>Sign In</h2>
                <Link to="/overview"><h2>Overview</h2></Link>
            </div>
        </React.Fragment>
    )
}

export default Header;
            