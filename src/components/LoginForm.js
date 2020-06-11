import React, {useState, useEffect} from "react"
import{useDispatch, useSelector} from "react-redux"
import {login} from "../store/actions/auth"
import { useHistory } from "react-router-dom"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const isAuthenticate = useSelector(state =>state.auth.isAuthenticate)
    const history = useHistory()
    const submit = async e => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        console.log("data", userData)
        await dispatch(login(userData))
        history.push("/")
    }
    return(
        <div>
            <form>
                <input
                    type="name"
                    value={email}
                    name="name"
                    placeholder="name"
                    onChange={(e)=> setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    name="password"
                    placeholder="password"
                    onChange={(e)=> setPassword(e.target.value)}
                />
                <button onClick={submit}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm