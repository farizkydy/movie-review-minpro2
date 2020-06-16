import React, {useEffect} from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import{connect} from "react-redux"
import "../assets/styles/Homepage.scss"
import "antd/dist/antd.css";
import { Link } from "react-router-dom"
import { Carousel, Pagination } from 'antd';
import {movieList} from "../store/actions/movies"

const Homepage = ({movieList, movies}) => {
    useEffect(() => {
        movieList();
    }, [movieList])
    // const movieLists = movies.map(item=>(
    //     <React.Fragment>
    //         <div className="movie-list">
    //             <img src={item.poster} alt="movie-poster"></img>
    //             <p>{item.title}</p>
    //             <Link to={`/description/${item.id}`}>LINK
    //             </Link>
    //         </div>
    //     </React.Fragment>
    // ))
    return(
        <React.Fragment>
            <Header/>
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
                <button className="button-action" onClick={()=>null}>Action</button>
                <button className="button-adventure">Adventure</button>
                <button className="buttoon-scifi">Science Fiction</button>
                <button className="button-comedy">Comedy</button>
            </div>
            <div className="homepage-content-1">
                {/* {movieLists} */}
                {movies.map(item=>(
                    <React.Fragment>
                    <div className="movie-list">
                        <Link to={`/description/${item.id}`}>
                        <img src={item.poster} alt="movie-poster"></img>
                        <p>{item.title}</p>
                        <button>DETAIL</button>
                        </Link>
                    </div>
                    </React.Fragment>
    ))}
            </div>
            <div className="homepage-pagination">
                <Pagination defaultCurrent={1} total={60}/>
            </div>
            <Footer/>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return{
        movies:state.movies.movies
    }
}

export default connect (mapStateToProps, {movieList}) (Homepage);