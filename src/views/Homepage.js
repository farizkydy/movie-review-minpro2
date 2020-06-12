import React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "../assets/styles/Homepage.scss"

const Homepage = () => {
    return(
        <React.Fragment>
            <Header/>
            <div>
                <img src={require("../assets/images/dio.jpg")} alt="Homepage"></img>
            </div>
            <div className="homepage-category">
                <h3>Browse by category</h3>
            </div>
            <div className="homepage-category-button">
                <button className="button-all">All</button>
                <button className="button-anime">Anime</button>
                <button className="button-action">Action</button>
                <button className="button-adventure">Adventure</button>
                <button className="buttoon-scifi">Science Fiction</button>
                <button className="button-comedy">Comedy</button>
            </div>
            <div className="homepage-content-1">
                <img src={require("../assets/images/part1.jpg")} alt="part1"></img>
                <img src={require("../assets/images/part2.jpg")} alt="part2"></img>
                <img src={require("../assets/images/part3.jpg")} alt="part3"></img>
                <img src={require("../assets/images/part4.jpg")} alt="part4"></img>
                <img src={require("../assets/images/part5.png")} alt="part5"></img>
            </div>
            <div className="homepage-content-2">
                <img src={require("../assets/images/part6.jpg")} alt="part6"></img>
                <img src={require("../assets/images/part7.jpg")} alt="part7"></img>
                <img src={require("../assets/images/part8.jpg")} alt="part8"></img>
                <img src={require("../assets/images/extra1.jpg")} alt="extra1"></img>
                <img src={require("../assets/images/extra2.jpg")} alt="extra2"></img>
            </div>
            <div className="homepage-content-3">
                <img src={require("../assets/images/extra3.jpg")} alt="extra3"></img>
                <img src={require("../assets/images/extra4.jpg")} alt="extra4"></img>
                <img src={require("../assets/images/extra5.jpg")} alt="extra5"></img>
                <img src={require("../assets/images/extra6.jpg")} alt="extra6"></img>
                <img src={require("../assets/images/extra7.jpg")} alt="extra7"></img>
            </div>
            <div>
                <h1>PAGINATION</h1>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

export default Homepage;