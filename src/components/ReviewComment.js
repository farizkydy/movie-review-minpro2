import React, { Component } from "react";
import "../assets/sass/ReviewPage.scss";
import { FaStar } from "react-icons/fa";

// const { TextArea } = Input;

class ReviewComment extends Component {
    render() {
        return (
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
                    <p>Bla bla bla</p>
                    {/* <input type="text" name="text" placeholder="leave a review" /> */}
                </div>
            </div>

        );

    }
}

export default ReviewComment;
