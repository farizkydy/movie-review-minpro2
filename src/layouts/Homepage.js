import React, { useEffect } from "react"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import { connect, useSelector, useDispatch } from "react-redux"
import "../assets/sass/Homepage.scss"
import "antd/dist/antd.css";
// import { useHistory } from "react-router-dom"
import { Carousel, Pagination } from 'antd';
import { getMovies, getMoviesId } from "../store/actions/movies"
import { Link } from "react-router-dom"


function Homepage() {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movies.movies);
    const moviesId = useSelector((state) => state.movies.moviesId);

    useEffect(() => {
        dispatch(getMovies());
    }, []);


    return (
        // <React.Fragment>
        <div>
            <HeaderComponent />
            <div className="homepage-carousel">
                <Carousel autoplay>
                    <div>
                        <img src={require("../assets/images/slider1.jpg")} alt="part1"></img>
                        <div className="carousel-text">
                            <h1>Check Out Jojo's Bizzare Adventure!</h1>
                            <p>Now featuring English, Indonesian, and Sundanese dub!</p>
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/images/slider2.jpg")} alt="part2"></img>
                        <div className="carousel-text">
                            <h1>The Crusaders are Back!</h1>
                            <p>Brand new season and enemies!</p>
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/images/slider3.jpg")} alt="part3"></img>
                        <div className="carousel-text">
                            <h1>Jojo's Bizzare Adventure: Diamond is Unbreakable</h1>
                            <p>Watch Bites the Dust arc!</p>
                        </div>
                    </div>
                    <div>
                        <img src={require("../assets/images/slider4.jpg")} alt="part4"></img>
                        <div className="carousel-text">
                            <h1>Brand New Jojo's Bizzare Adventure Live Action Movie!</h1>
                            <p>Available with English, Indonesia, Javanese, Sundanese, and Namekian subs!</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            <div className="homepage-category">
                <h3>Browse by category</h3>
            </div>
            <div className="homepage-category-button">
                <button className="button-all">All</button>
                <button className="button-anime">Anime</button>
                <button className="button-action" onClick={() => null}>Action</button>
                <button className="button-adventure">Adventure</button>
                <button className="buttoon-scifi">Science Fiction</button>
                <button className="button-comedy">Comedy</button>
            </div>
            <div className="homepage-content-1">
                {movieList.map((movie) => (
                    <div className="movie-list">
                        <img alt="movie" src={movie.poster} style={{ height: "50%" }} />
                        <h5>{movie.title}</h5>
                        <Link to={`/description/${movie.id}`} >
                            <button
                                onClick={() => {
                                    dispatch(getMoviesId(movie.id));
                                    // history.push("/overview");
                                }}
                            >
                                synopsis
                        </button>
                        </Link >
                    </div>
                ))}

            </div>

            <div className="homepage-pagination">
                <Pagination defaultCurrent={1} total={60} />
            </div>
            <FooterComponent />
        </div>

    );
}

export default Homepage;








