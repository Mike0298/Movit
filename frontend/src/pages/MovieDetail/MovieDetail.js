import React, { useState } from "react";
import Comments from "../../components/Comments/Comments";
import "./MovieDetail.css";
import {
    AiOutlineHeart,
    AiFillHeart,
    AiOutlineStar,
    AiFillStar,
} from "react-icons/ai";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link,
} from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { actLikeMovie, actUnlikeMovie } from "../../redux/actions/movieAction";
import { useDispatch } from "react-redux";

const MovieDetail = (props) => {
    const { detail } = props;
    const dispatch = useDispatch();
    const [isLiked, setIsLiked] = useState(false);
    const [isRated, setIsRated] = useState(false);
    console.log("MovieDetail", props);

    const handleLikeClick = () => {
        dispatch(actLikeMovie(detail._id));
    };
    const handleUnlikeClick = () => {
        dispatch(actUnlikeMovie(detail._id));
    };

    return (
        <div className="detail-container" key={detail?._id}>
            <Link to="/" className="detail-back-button">
                <h3>Back</h3>
            </Link>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }}
            >
                <div>
                    <img
                        src={detail?.imageUrl}
                        alt=""
                        className="detail-image"
                    />
                    <div className="detail-button-container">
                        <button
                            className="rate-btn"
                            onClick={() => setIsRated(!isRated)}
                        >
                            {isRated ? (
                                <AiFillStar style={{ paddingRight: "10px" }} />
                            ) : (
                                <AiOutlineStar
                                    style={{ paddingRight: "10px" }}
                                />
                            )}{" "}
                            Rate
                        </button>
                        <button
                            className="like-btn"
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            {isLiked ? (
                                <AiFillHeart
                                    onClick={() => handleLikeClick()}
                                />
                            ) : (
                                <AiOutlineHeart
                                    onClick={() => handleUnlikeClick()}
                                />
                            )}
                        </button>
                    </div>
                </div>
                <div style={{ width: "100%" }}>
                    <p className="detail-title">{detail?.title}</p>
                    <div className="detail-genres">
                        {detail?.genres.map((genre) => {
                            return <div className="detail-genre">{genre}</div>;
                        })}
                    </div>
                </div>
            </div>
            <div className="detail-content-container">
                <div className="detail-content-item">
                    <p
                        className="bottom-line"
                        style={{
                            fontSize: "40px",
                            fontWeight: "700",
                            marginBottom: "10px",
                        }}
                    >
                        MOVIE INFO
                    </p>
                    <div className="detail-country">
                        <h3>Country:</h3>
                        <BsArrowRight /> {detail?.country || "Loading..."}
                    </div>
                    <div className="detail-year">
                        <h3>Release year:</h3>
                        <BsArrowRight /> {detail?.releaseYear || "Loading..."}
                    </div>
                    <div className="detail-description">
                        <h3 style={{ fontSize: "30px" }}>Director:</h3>
                        <BsArrowRight /> {detail?.director || "Loading..."}
                    </div>
                    <div className="detail-description">
                        <h3 style={{ fontSize: "30px" }}>Writer(s):</h3>
                        <BsArrowRight />{" "}
                        {detail?.writer.map((person) => person + " ???? ") ||
                            "Loading..."}
                    </div>
                    <div className="detail-description">
                        <h3 style={{ fontSize: "30px" }}>Stars:</h3>
                        <BsArrowRight />{" "}
                        {detail?.stars.map((person) => person + " ???? ") ||
                            "Loading..."}
                    </div>
                    <div className="detail-description">
                        <h3 style={{ fontSize: "30px" }}>Description:</h3>
                        <BsArrowRight /> {detail?.description || "Loading..."}
                    </div>
                    <div className="detail-description">
                        <h3 style={{ fontSize: "30px" }}>Content:</h3>
                        <BsArrowRight /> {detail?.content || "Loading..."}
                    </div>
                </div>
                <div className="detail-statics detail-content-item">
                    <div className="detail-likes">
                        <h3>Likes: {`${detail?.likeCounter} ??????`}</h3>
                    </div>
                    <div className="detail-rating">
                        <h3>Rating:</h3>
                        <CircularProgressbar
                            value={detail?.rating}
                            maxValue={10}
                            text={`${detail?.rating}/10`}
                            strokeWidth={5}
                            styles={buildStyles({
                                textColor: "#7959ec",
                                pathColor: "#7959ec",
                            })}
                        />
                    </div>
                </div>
                <div className=" detail-comments detail-content-item">
                    <div>
                        <h3
                            className="bottom-line"
                            style={{ fontSize: "30px" }}
                        >
                            COMMENTS
                        </h3>
                        <Comments />
                        {detail?.comments}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
