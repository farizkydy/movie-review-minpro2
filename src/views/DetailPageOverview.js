// import React, {useState, useEffect} from "react";
import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
// import{useSelector} from "react-redux"
// import { useHistory } from "react-router-dom"
import {StarTwoTone} from "@ant-design/icons";
import "../assets/styles/DetailPageOverview.scss"

let ratings = ""

let rating1 = () => {
    ratings = "1"
    console.log("rating =",ratings)
}

let rating2 = () => {
    ratings = "2"
    console.log("rating = ",ratings)
}

let rating3 = () => {
    ratings = "3"
    console.log("rating = ",ratings)
}

let rating4 = () => {
    ratings = "4"
    console.log("rating = ",ratings)
}

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
    return(
        <React.Fragment>
            <Header/>
            <div className="overview-header">
                <h1>Jojo no Kimyou na Bouken</h1>
                <div className="overview-rating">
                    <button onClick={rating1}><StarTwoTone twoToneColor="#FFFF00" /></button>
                    <button onClick={rating2}><StarTwoTone twoToneColor="#FFFF00" /></button>
                    <button onClick={rating3}><StarTwoTone twoToneColor="#FFFF00" /></button>
                    <button onClick={rating4}><StarTwoTone twoToneColor="#FFFF00" /></button>
                    <button onClick={rating5}><StarTwoTone twoToneColor="#FFFF00" /></button>
                    <p className="review-count">999 reviews</p>
                </div>
                <div className="review-synopsis">
                    <p>Each of the series' eight protagonists is a member of the Joestar family (ジョースター家, Jōsutā ke), whose mainline descendants possess a star-shaped birthmark above their left shoulder blade and a name that can be abbreviated to the titular "JoJo".</p>
                </div>
                <div className="overview-header-buttons">
                    <button>Watch Trailer</button>
                    <button>Add to Watchlist</button>
                </div>
            </div>
            <div className="overview-navigation">
                <button>Overview</button>
                <button>Characters</button>
                <button>Review</button>
            </div>
            <div className="overview-contents">
                <h1>Synopsis</h1>
                <p>Each of the series' eight protagonists is a member of the Joestar family (ジョースター家, Jōsutā ke), whose mainline descendants possess a star-shaped birthmark above their left shoulder blade and a name that can be abbreviated to the titular "JoJo". The plot of each part generally consists of this JoJo gathering a group of allies, mastering their supernatural ability, battling various enemies, and ultimately confronting the part's powerful main villain. The first six parts of the series take place within a single continuity whose multi-generational conflict stems from the rivalry between Jonathan Joestar and Dio Brando, while the latter two parts take place in an alternate universe following a continuity reboot, where the Joestar family tree is heavily altered.</p>
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
            <Footer/>
        </React.Fragment>
    )
}

export default DetailPageOverview;