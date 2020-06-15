import React, { Component } from "react";
import "../assets/sass/ReviewPage.scss";
import { FaStar } from "react-icons/fa";
// import "./Review.scss";

export default function ReviewComment() {
    var Review = Array.from(Array(10)).map((a, td_i, arr) => (
        <div className="review-wrapper flex">
            <div className="avatar">
                <img src={require("../assets/images/phoebe.jpeg")} alt="" />
            </div>
            <div className="reviews">
                <h3>Name</h3>
                <div className="starts">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
                    eveniet at ipsam cumque illum quisquam laborum ex non repellat, eaque
                    magnam pariatur quis vel nisi aliquam! Ipsum, ullam. Molestiae,
                    labore?
        </p>
            </div>
        </div>
    ));

    // const { TextArea } = Input;

    return (
        <div >
            {Review}
        </div>

    );

}

// export default ReviewComment;
