import React from "react";
import Comment from "./Comment/Comment";
import { FaPaperPlane } from "react-icons/fa";
import "./Comments.css";

const Comments = () => {
    return (
        <form className="wrapper">
            <input
                className="comments-input wrapper-item"
                type="text"
                placeholder="Write something ..."
            />
            <button className="comments-submit-btn wrapper-item" type="submit">
                <FaPaperPlane size={20}></FaPaperPlane>
            </button>
            <div className="wrapper-item">
                <Comment></Comment>
            </div>
        </form>
    );
};

export default Comments;
