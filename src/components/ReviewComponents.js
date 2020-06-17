import React, { useState, useEffect } from "react";
import { Input, Rate } from 'antd';
import { useParams } from "react-router-dom";
import "../assets/sass/ReviewPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaStar } from "react-icons/fa";
import { postReview } from "../store/actions/reviewComments";
import { reviewList } from "../store/actions/review";

const { TextArea } = Input;


const ReviewComponent = () => {
    let token = localStorage.getItem("token")
    let { id } = useParams()
    const dispatch = useDispatch()

    const [review, setReview] = useState({
        comment: "",
        rating: null
    })
    const data = review
    const [value, setValue] = useState()


    const handleChange = value => {
        console.log(value)
        setValue(value)
        setReview({ rating: value })
    }
    console.log(id, data)
    useEffect(() => {
        dispatch(reviewList(id))
    }, [dispatch, id])



    const handleInput = e => {
        setReview({
            ...review,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        handleError()
        dispatch(postReview(id, data))
        setReview({ comment: " " })
    }
    const handleError = () => {
        if (token === null) {
            alert("please sign in first")
        }
    }


    return (
        <div>
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
                    <Rate allowHalf value={value} onChange={handleChange} />
                </div>
                <div className="input">
                    <TextArea rows={3} coloumns={8} onChange={handleInput} />
                    {/* <input type="text" name="text" placeholder="leave a review" /> */}
                    <div className="button-send">
                        <button style={{ float: "left" }} onClick={handleSubmit}>Send</button>
                    </div>
                </div>
                {/* <div>
                        <ReviewComment />
                    </div> */}
            </div>

        </div>

    );

}




export default ReviewComponent;

// import React, { useState, useEffect } from "react";
// import "../assets/sass/ReviewPage.scss";
// import { useParams } from "react-router-dom";
// import { reviewList } from "../store/actions/review";
// import { useDispatch, useSelector } from "react-redux";
// // import { postReview } from "../stores/actions/reviewComments";
// import {
//     Comment,
//     Avatar,
//     Form,
//     Input,
//     Button,
//     Rate
// } from "antd";
// import "../../node_modules/antd/dist/antd.css"
// // import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';

// const ReviewComponents = () => {
//     let token = localStorage.getItem("token")
//     let { id } = useParams()
//     const dispatch = useDispatch()
//     const [review, setReview] = useState({
//         comment: "",
//         rating: null
//     })
//     const data = review
//     const reviews = useSelector(state => state.review.description)
//     const [value, setValue] = useState()

//     // console.log("komen", reviews)

//     const handleChange = value => {
//         // dispatch(postRating(id, rating))
//         console.log(value)
//         setValue(value)
//         setReview({ rating: value })
//     }

//     console.log(id, data)
//     useEffect(() => {
//         dispatch(reviewList(id))
//     }, [dispatch, id])

//     const handleInput = e => {
//         setReview({
//             ...review,
//             [e.target.name]: e.target.value
//         })
//     }

//     // const handleSubmit = () => {
//     //     handleError()
//     //     dispatch(postReview(id, data))
//     //     setReview({ comment: " " })
//     // }

//     const handleError = () => {
//         if (token === null) {
//             alert("please sign in first")
//         }
//     }
//     return (
//         <div>
//             <Form>
//                 <Form.Item
//                     name="comment"
//                 // rules={[{ required: true, message: 'Please input your review!' }]}
//                 >
//                     <Rate allowHalf value={value} onChange={handleChange} />
//                     <Input placeholder="Add your review..." allowClear value={review.comment} name="comment" onChange={handleInput} />
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit" >Submit</Button>
//                 </Form.Item>
//             </Form>
//             <div>
//                 {reviews.length ?
//                     reviews.map(item =>
//                         <Comment
//                             author={<p style={{ color: "#858585" }}>{item.User.name}</p>}
//                             avatar={
//                                 <Avatar
//                                     src={item.User.Image.url}
//                                     alt="user"
//                                 />
//                             }
//                             content={
//                                 <div>
//                                     <p>"{item.comment}"</p>
//                                     <Rate disabled value={item.rating} />
//                                 </div>

//                             }
//                         />
//                     )
//                     :
//                     <p>No reviews yet.</p>
//                 }
//             </div>
//         </div>
//     )
// }

// export default ReviewComponents;

