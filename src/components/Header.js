import React, {useState} from "react"
import{useDispatch, useSelector} from "react-redux"
import "../assets/styles/Header.scss"
import {Link} from "react-router-dom"
import Signin from "./modal/auths/Signin"
import Signup from "./modal/auths/Signup";
import Profile from "./modal/profile";
import Upload from "./modal/profile/upload";
import { ACTION_SIGN_OUT } from "../store/actions/auth";

const Header = () => {
    const stateUser = useSelector(state => state.auth);
    const dispatch = useDispatch();

  const [modal, setModal] = useState("");

  const signin = "signin";
  const signup = "signup";
  const profile = "profile";
  const upload = "upload";

  const doSignout = () => {
    console.log("signout triggered");
    dispatch(ACTION_SIGN_OUT());
  };

  const toggleModal = e => {
    setModal({
      [e.target.id]: !modal[e.target.id]
    });
  };

    return(
        <React.Fragment>
            <div className="header">
                <Link to="/"><h1>MOVIE <span className="header-title">HUB</span></h1></Link>
                <input placeholder="search movie..."></input>
                 {stateUser ? (
                    <div className="profile-wrapper">
                        <h1>{stateUser.name}</h1>
                        {/* <img className="profile" src={stateUser.image_url} alt="profile" /> */}
                        <div className="dropdown">
                        <strong className="username">{stateUser.email}</strong>
                        <a id={upload} href="/#" onClick={toggleModal}>
                            Change Avatar
                        </a>
                        <a id={profile} href="/#" onClick={toggleModal}>
                            Update Profile
                        </a>
                        <a href="/#" onClick={doSignout}>
                            Sign out
                        </a>
                        </div>
                    </div>
                    ) : ( <div className="sign-in">
                    <a id={signin} href="/#" className="ml-1 bold" onClick={toggleModal}>
                        Sign in
                    </a>
                    </div>)}
                </div>
                {modal[signin] ? (
                    <Signin toggleModal={toggleModal} signup={signup} />
                ) : (
                    false
                )}
                {modal[signup] ? (
                    <Signup toggleModal={toggleModal} signin={signin} />
                ) : (
                    false
                )}
                {modal[profile] ? <Profile toggleModal={toggleModal} /> : false}
                {modal[upload] ? <Upload toggleModal={toggleModal} /> : false}
        </React.Fragment>
    )
}

export default Header;
            