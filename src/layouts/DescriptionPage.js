// import React, { useState, useEffect } from "react";
// import { FaStar } from "react-icons/fa";
// import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
// import "../assets/sass/DescriptionPage.scss";
// import Cast from "../components/Cast";
// import HeaderComponent from "./HeaderComponent";
// import FooterComponent from "./FooterComponent"
// import DetailPageOverview from "../components/DetailPageOverview";
// import ReviewComponent from "../components/ReviewComponents";
// import { getMovies } from "../store/actions/movie";
// import { useSelector, useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";

// function DescriptionPage() {
//     const overview = "overview";
//     const character = "character";
//     const review = "review";
//     const [detail, setDetail] = useState(overview);
//     const description = useSelector(state => state.getMovies.descriptions)
//     const dispatch = useDispatch();
//     const { id } = useParams()

//     useEffect(() => {
//         dispatch(getMovies(id))
//     })



//     return (
//         <div>
//             <HeaderComponent />
//             <div className="description">
//                 <div className="container">
//                     <div className="banner">
//                         <img src={description.poster} alt="friends" />
//                         <div className="banner-body flex x-center column">
//                             <div className="top">
//                                 <h1>{description.title}</h1>
//                                 <FaStar style={{ color: "yellow" }} />
//                                 <FaStar style={{ color: "yellow" }} />
//                                 <FaStar style={{ color: "yellow" }} />
//                                 <FaStar style={{ color: "yellow" }} />
//                                 <FaStar />
//                                 <span style={{ margin: "25px" }}>4/5</span>
//                                 <span>(2189 Reviews)</span>
//                                 <div className="middle">
//                                     <p>{description.synopsis}</p>
//                                 </div>
//                                 <div className="button">
//                                     <a href={description.trailer} className="watch">Watch Trailer</a>
//                                     <a href="#" className="add">Add to Watchlist</a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="flex wrap link-wrapper">
//                         <span onClick={() => setDetail(review)}
//                             className={detail === review ? "active" : ""}
//                             style={{ color: "black", borderRadius: "1rem" }}>Reviews</span>
//                         <span onClick={() => setDetail(overview)}
//                             className={detail === overview ? "active" : ""}
//                             style={{ color: "black", borderRadius: "1rem" }}>Overviews</span>
//                         <span onClick={() => setDetail(character)}
//                             className={detail === character ? "active" : ""}
//                             style={{ color: "black", borderRadius: "1rem" }}>Character</span>
//                     </div>
//                     {detail === overview ? <DetailPageOverview /> : false}
//                     {detail === character ? <Cast /> : false}
//                     {detail === review ? <ReviewComponent /> : false}
//                 </div>
//             </div>
//             <div>
//                 <FooterComponent />
//             </div>
//         </div>
//     );
// };




// export default DescriptionPage;






import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FontawesomeObject } from "@fortawesome/fontawesome-svg-core";
import "../assets/sass/DescriptionPage.scss";
import Cast from "../components/Cast";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent"
import DetailPageOverview from "../components/DetailPageOverview";
import ReviewComponent from "../components/ReviewComponents";
import { movieList } from "../store/actions/movies";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

function DescriptionPage() {
    const overview = "overview";
    const character = "character";
    const review = "review";
    const [detail, setDetail] = useState(overview);
    // const dispatch = useDispatch();
    // const {id} = useParams()



    return (
        <div>
            <HeaderComponent />
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
                        <span onClick={() => setDetail(review)}
                            className={detail === review ? "active" : ""}
                            style={{ color: "black", borderRadius: "1rem" }}>Reviews</span>
                        <span onClick={() => setDetail(overview)}
                            className={detail === overview ? "active" : ""}
                            style={{ color: "black", borderRadius: "1rem" }}>Overviews</span>
                        <span onClick={() => setDetail(character)}
                            className={detail === character ? "active" : ""}
                            style={{ color: "black", borderRadius: "1rem" }}>Character</span>
                    </div>
                    {detail === overview ? <DetailPageOverview /> : false}
                    {detail === character ? <Cast /> : false}
                    {detail === review ? <ReviewComponent /> : false}
                </div>
            </div>
            <div>
                <FooterComponent />
            </div>
        </div>
    );
};




export default DescriptionPage;

