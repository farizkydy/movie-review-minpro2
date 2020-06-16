import React, { Component } from "react";
import { Input } from 'antd';
import "../assets/sass/ReviewPage.scss";
import { FaStar } from "react-icons/fa";
import DescriptionPage from "../layouts/DescriptionPage";
import HeaderComponent from "../layouts/HeaderComponent";
import FooterComponent from "../layouts/FooterComponent";
import ReviewComment from "./ReviewComment";
import moment from 'moment';


const { TextArea } = Input;


class ReviewComponent extends Component {

    render() {
        return (

            <div>
                <HeaderComponent />
                <DescriptionPage />
                <div className="review">
                    <div className="review__img">
                        <img
                            src="https://www.panditfootball.com/content/uploads/2014/03/343374_heroa.jpg"
                            alt="/"
                        />
                    </div>
                    <div className="review__ratings">
                        <h2>Keren</h2>
                    </div>
                    <div className="review__ratings__stars">
                        <FaStar style={{ color: "yellow" }} />
                        <FaStar style={{ color: "yellow" }} />
                        <FaStar style={{ color: "yellow" }} />
                        <FaStar style={{ color: "yellow" }} />
                    </div>
                    <div className="input">
                        <TextArea rows={4} />
                        {/* <input type="text" name="text" placeholder="leave a review" /> */}
                        <div className="button-send">
                            <button style={{ float: "left" }}>Send</button>
                        </div>
                    </div>
                    {/* <div>
                        <ReviewComment />
                    </div> */}
                </div>
                <FooterComponent />
            </div>

        );

    }
}



export default ReviewComponent;
