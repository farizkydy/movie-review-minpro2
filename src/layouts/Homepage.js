import React, { useEffect } from "react"
import HeaderComponent from "./HeaderComponent"
import FooterComponent from "./FooterComponent"
import { connect, useSelector, useDispatch } from "react-redux"
import "../assets/sass/Homepage.scss"
import "antd/dist/antd.css";
// import { useHistory } from "react-router-dom"
import { Carousel, Pagination } from 'antd';
import { getMovies, getMoviesId } from "../store/actions/movies";
import { movieListPagination } from "../store/actions/pagination";
import { Link } from "react-router-dom"


function Homepage() {
    const dispatch = useDispatch();
    const movieList = useSelector((state) => state.movies.movies);
    const moviesId = useSelector((state) => state.movies.moviesId);
    const changePage = (key) => {
        console.log('key', key)
        dispatch(movieListPagination(key))
    }

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
                        <h5 style={{ marginBottom: " 10px" }}>{movie.title}</h5>
                        <Link to={`/description/${movie.id}`} >
                            <button
                                style={{ margin: "20px" }}
                                onClick={() => {
                                    dispatch(getMoviesId(movie.id));
                                    // history.push("/overview");
                                }}
                            >
                                Detail
                        </button>
                        </Link >
                    </div>
                ))}

            </div>

            <div className="homepage-pagination">
                <Pagination defaultCurrent={1} total={60} onChange={changePage} />
            </div>
            <FooterComponent />
        </div>

    );
}

export default Homepage;

// import React, { useEffect } from "react"
// import HeaderComponent from "./HeaderComponent"
// import FooterComponent from "./FooterComponent"
// import { connect, useDispatch } from "react-redux"
// import "../assets/sass/Homepage.scss"
// import "antd/dist/antd.css";
// import { Link } from "react-router-dom"
// import { Carousel, Pagination } from 'antd';
// import { movieListPagination, movieListAction, movieList } from "../store/actions/movies";

// const Homepage = ({ movieList, movies }) => {
//     useEffect(() => {
//         movieList();
//     }, [movieList])
//     const movieLists = movies.map(item => (
//         <Link to={`/description/${item.id}`}>
//             <div className="movie-list">
//                 <img src={item.poster} alt="movie-poster"></img>
//                 <p>{item.title}</p>
//             </div>
//         </Link>
//     ))
//     console.log("MOVIES", movies)
//     const dispatch = useDispatch();

//     const changePage = (key) => {
//         console.log('key', key)
//         dispatch(movieListPagination(key))
//     }

//     const moviesAction = () => {
//         dispatch(movieListAction())
//     }
//     return (
//         <React.Fragment>
//             <HeaderComponent />
//             <div className="homepage">
//                 <div className="homepage-carousel">
//                     <Carousel autoplay>
//                         <div>
//                             <img src={require("../assets/images/slider1.jpg")} alt="part1"></img>
//                             <div className="carousel-text">
//                                 <h1>Check Out Jojo's Bizzare Adventure!</h1>
//                                 <p>Now featuring English, Indonesian, and Sundanese dub!</p>
//                             </div>
//                         </div>
//                         <div>
//                             <img src={require("../assets/images/slider2.jpg")} alt="part2"></img>
//                             <div className="carousel-text">
//                                 <h1>The Crusaders are Back!</h1>
//                                 <p>Brand new season and enemies!</p>
//                             </div>
//                         </div>
//                         <div>
//                             <img src={require("../assets/images/slider3.jpg")} alt="part3"></img>
//                             <div className="carousel-text">
//                                 <h1>Jojo's Bizzare Adventure: Diamond is Unbreakable</h1>
//                                 <p>Watch Bites the Dust arc!</p>
//                             </div>
//                         </div>
//                         <div>
//                             <img src={require("../assets/images/slider4.jpg")} alt="part4"></img>
//                             <div className="carousel-text">
//                                 <h1>Brand New Jojo's Bizzare Adventure Live Action Movie!</h1>
//                                 <p>Available with English, Indonesia, Javanese, Sundanese, and Namekian subs!</p>
//                             </div>
//                         </div>
//                     </Carousel>
//                 </div>
//                 <div className="homepage-category">
//                     <h3>Browse by category</h3>
//                 </div>
//                 <div className="homepage-category-button">
//                     <button className="button-all">All</button>
//                     <button className="button-anime">Anime</button>
//                     <button className="button-action" onClick={moviesAction}>Action</button>
//                     <button className="button-adventure">Adventure</button>
//                     <button className="buttoon-scifi">Science Fiction</button>
//                     <button className="button-comedy">Comedy</button>
//                 </div>
//                 <div className="homepage-content-1">
//                     {movieLists}
//                     {/* <img src={require("../assets/images/part1.jpg")} alt="part1"></img>
//                 <img src={require("../assets/images/part2.jpg")} alt="part2"></img> */}
//                     {/* {movies.movies.map(item=> {
//                     return(
//                         <div className="homepage-store">
//                             <img src={item.image}></img>
//                             <h1>{item.title}</h1>
//                         </div>
//                     )
//                 })} */}
//                     {/* <img src={require("../assets/images/part3.jpg")} alt="part3"></img>
//                 <img src={require("../assets/images/part4.jpg")} alt="part4"></img>
//                 <img src={require("../assets/images/part5.png")} alt="part5"></img>
//             </div>
//             <div className="homepage-content-2">
//                 <img src={require("../assets/images/part6.jpg")} alt="part6"></img>
//                 <img src={require("../assets/images/part7.jpg")} alt="part7"></img>
//                 <img src={require("../assets/images/part8.jpg")} alt="part8"></img>
//                 <img src={require("../assets/images/extra1.jpg")} alt="extra1"></img>
//                 <img src={require("../assets/images/extra2.jpg")} alt="extra2"></img>
//             </div>
//             <div className="homepage-content-3">
//                 <img src={require("../assets/images/extra3.jpg")} alt="extra3"></img>
//                 <img src={require("../assets/images/extra4.jpg")} alt="extra4"></img>
//                 <img src={require("../assets/images/extra5.jpg")} alt="extra5"></img>
//                 <img src={require("../assets/images/extra6.jpg")} alt="extra6"></img>
//                 <img src={require("../assets/images/extra7.jpg")} alt="extra7"></img> */}
//                 </div>
//                 <div className="homepage-pagination">
//                     <Pagination defaultCurrent={1} total={60} onChange={changePage} />
//                 </div>
//             </div>
//             <FooterComponent />
//         </React.Fragment>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         movies: state.movies.movies
//     }
// }

// export default connect(mapStateToProps, { movieList })(Homepage);







