import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div style={{ width: "400px" }}>
          <h3 style={{ marginBottom: "5px" }}>About Us</h3>
          <p>
            Movit Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, harum? Nostrum, in sint dolor commodi quam totam
            aperiam autem tempora accusantium, iure ut reprehenderit cum minus
            ab suscipit temporibus ipsum.
          </p>
          <Link to="/admin">admin</Link>
        </div>
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
