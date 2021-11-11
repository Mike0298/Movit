import React from "react";
import "./Comment.css";

const Comment = () => {
    return (
        <>
            <div className="comment-grid">
                <div className="comment-item comment-user">
                    <img
                        src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                        style={{
                            height: "50px",
                            width: "50px",
                            borderRadius: "100%",
                            marginRight: "10px",
                        }}
                        alt=""
                    />
                    <h3>User's name</h3>
                </div>
                <p className="comment-item">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia reprehenderit odio omnis quasi incidunt, hic ullam
                    alias quisquam aliquid pariatur commodi dolorum at eos.
                    Corrupti in itaque officiis sed odio!
                </p>
            </div>
        </>
    );
};

export default Comment;
