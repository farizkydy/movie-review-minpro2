import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import DescriptionPage from "../layouts/DescriptionPage";
import HeaderComponent from "../layouts/HeaderComponent";
import FooterComponent from "../layouts/FooterComponent";
import { getMoviesId } from "../store/actions/movies";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import "../assets/sass/Cast.scss";

function Cast(props) {
    const moviesId = useSelector((state) => state.movies.moviesID);
    console.log(moviesId)

    let { id } = useParams();
    console.log(id)
    useEffect(() => {
        props.getMoviesId(id);
    }, []);
    return (
        <div>
            {/* <HeaderComponent />
                <DescriptionPage /> */}
            <div className="casts">
                <div className="casts__container">

                    <div className="casts__container__img">
                        <h1 style={{ fontSize: "200%" }}>Character :</h1>
                        <h1>{moviesId.actor}</h1>



                    </div>
                    {/* <div>
                            <p>joey</p>
                        </div> */}

                </div>
            </div>
            {/* <FooterComponent /> */}
        </div>
    )
}


export default connect(null, { getMoviesId })(Cast);



{/* <div className="card">
                            <img src={require('../assets/images/rachel.jpeg')} alt="joey" />
                            <p>Joey</p>
                        </div>
                        <div className="card">
                            <img src={require('../assets/images/monica.jpeg')} alt="joey" />
                            <p>Phoebe</p>
                        </div>
                        <div className="card">
                            <img src={require('../assets/images/rachel.jpeg')} alt="joey" />
                            <p>Rachel</p>
                        </div>
                        <div className="card">
                            <img src={require('../assets/images/rachel.jpeg')} alt="joey" />
                            <p>Ross</p>
                        </div> */}