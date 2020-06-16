import React, { useState, useEffect } from "react";
import HeaderComponent from "../layouts/HeaderComponent";
import FooterComponent from "../layouts/FooterComponent";
import DescriptionPage from "../layouts/DescriptionPage";
import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { StarTwoTone } from "@ant-design/icons";
import "../assets/sass/DetailPageOverview.scss";


let ratings = ""

// let rating1 = () => {
//     ratings = "1"
//     console.log("rating =", ratings)
// }

// let rating2 = () => {
//     ratings = "2"
//     console.log("rating = ", ratings)
// }

// let rating3 = () => {
//     ratings = "3"
//     console.log("rating = ", ratings)
// }

// let rating4 = () => {
//     ratings = "4"
//     console.log("rating = ", ratings)
// }

let rating5 = () => {
    ratings = "5"
    console.log("rating = ", ratings)
}

const DetailPageOverview = () => {
    // const history = useHistory()
    // const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    // useEffect(() => {
    //     if(isAuthenticated === false) {
    //     history.push("/login")
    //     }
    // }, [])

    const getDetail = useSelector(state => state.movies.detail)
    console.log(getDetail)
    return (
        <React.Fragment>
            {/* <HeaderComponent />
            <DescriptionPage /> */}

            <div className="overview-contents">
                <h1>Synopsis</h1>
                <p>{getDetail}</p>
                <h1>Movie Info</h1>
                <p><span className="content-spans">Release date</span>: October 5, 2012</p>
                <p><span className="content-spans">Director</span>: Hirohiko Araki</p>
                <p><span className="content-spans">Featured Song</span>: Sono Chi no Sadame</p>
                <p><span className="content-spans">Budget</span>: 200 million USD</p>
                <p><span className="content-spans">Number of seasons</span>: 5</p>
                <p><span className="content-spans">Genre</span>: Action, Adventure, Shonen</p>
                <p><span className="content-spans">Studio</span>: David Productions</p>
                <p><span className="content-spans">Keyword</span>: Jojo, Jojo's Bizzare Adventure, Joestar</p>
            </div>
            {/* <FooterComponent /> */}
        </React.Fragment>
    )
}

export default DetailPageOverview;
