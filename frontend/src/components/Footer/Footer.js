import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div>
                    <span>Movit project, Copyright © 2021</span>
                </div>
                <div>
                    <ul className="social-links">
                        <li>
                            <a href="https://facebook.com">
                                <FaFacebookF className="icon"></FaFacebookF>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com">
                                <AiFillGithub className="icon"></AiFillGithub>
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com">
                                <FaInstagram className="icon"></FaInstagram>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com">
                                <AiOutlineTwitter className="icon"></AiOutlineTwitter>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
