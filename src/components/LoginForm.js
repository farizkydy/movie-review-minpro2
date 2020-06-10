import React, {useState, useEffect} from "react"
import{useDispatch, useSelector} from "react-redux"
import {login} from "../store/actions/auth"

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const isAuthenticate = useSelector(state =>state.auth.isAuthenticate)

    const submit = e => {
        e.preventDefault()
        const userData = {
            email,
            password
        }
        console.log("data", userData)
        dispatch(login(userData))
    }
    return(
        <div>
            <form onSubmit={submit}>
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
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm