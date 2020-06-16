import React, { Component } from "react";
import { FaStar } from "react-icons/fa";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import "../assets/sass/DetailPageOverview.scss";

class DescriptionPage extends Component {
    render() {
        return (
            <div className="description">
                <div className="container">
                    <div className="banner">
                        <img src={require("../assets/images/friends.jpg")} alt="friends" />
                        <div className="banner-body flex x-center column">
                            <div className="top">
                                <h1>Friends</h1>
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar style={{ color: "yellow" }} />
                                <FaStar />
                                <span style={{ margin: "25px" }}>4/5</span>
                                <span>(2189 Reviews)</span>
                                <div className="middle">
                                    <p>Rachel Green, Ross Geller, Monica Geller, Joey Tribbiani, Chandler Bing and Phoebe Buffay are six 20 something year-olds, living off one another in the heart of New York City. Over the course of ten years, this average group of buddies goes through massive mayhem, family trouble, past and future romances, fights, laughs, tears and surprises as they learn what it really means to be a friend.</p>
                                </div>
                                <div className="button">
                                    <a href="#" className="watch">Watch Trailer</a>
                                    <a href="#" className="add">Add to Watchlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex wrap link-wrapper">
                        <span style={{ backgroundColor: "#ffa31a", color: "black", borderRadius: "1rem" }}><a href="/review"></a>Reviews</span>
                        <span style={{ color: "black", borderRadius: "1rem" }}><a href="#"></a>Overviews</span>
                        <span style={{ color: "black", borderRadius: "1rem" }}><a href="/cast"></a>Character</span>
                    </div>
                </div>
            </div>
        );
    };

}


export default DescriptionPage;
