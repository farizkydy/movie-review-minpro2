import React, { useState, useEffect } from "react";
import HeaderComponent from "../layouts/HeaderComponent";
import FooterComponent from "../layouts/FooterComponent";
import DescriptionPage from "../layouts/DescriptionPage";
import { getMoviesId } from "../store/actions/movies";
import { useParams } from "react-router-dom";
import { useSelector, connect } from "react-redux";

import "../assets/sass/DetailPageOverview.scss";



function DetailPageOverview(props) {
    const moviesId = useSelector((state) => state.movies.moviesID);
    console.log(moviesId)

    let { id } = useParams();
    console.log(id)
    useEffect(() => {
        props.getMoviesId(id);
    }, []);
    return (
        <React.Fragment>
            {/* <HeaderComponent />
            <DescriptionPage /> */}

            <div className="overview-contents">
                <h1>Synopsis</h1>
                <p>{moviesId.synopsis}</p>
                <h1>Movie Info</h1>
                <p><span className="content-spans">Release date</span>: {moviesId.synopsis}</p>
                <p><span className="content-spans">Director</span>: {moviesId.director}</p>
                <p><span className="content-spans">Language</span>: {moviesId.languages}</p>
                <p><span className="content-spans">Budget</span>: 200 million USD</p>
                <p><span className="content-spans">Number of seasons</span>: 5</p>
                <p><span className="content-spans">Genre</span>: {moviesId.genre}</p>
                <p><span className="content-spans">Studio</span>: David Productions</p>
                <p><span className="content-spans">Keyword</span>: Jojo, Jojo's Bizzare Adventure, Joestar</p>
            </div>
            {/* <FooterComponent /> */}
        </React.Fragment>
    )
}

export default connect(null, { getMoviesId })(DetailPageOverview);
