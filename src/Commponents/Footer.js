import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

function getCurrentDate() {
    let newDate = new Date()
    let year = newDate.getFullYear();
    return `${year}`
}

function Footer() {
    return (
        <div className="footer">
            <div className="footerIcons">
                <a href="https://www.facebook.com/">
                    <FaFacebookSquare
                        size={40}
                        className="footerIcon" />
                </a>
                <a href="https://www.instagram.com/?hl=pl">
                    <FaInstagram
                        size={40}
                        className="footerIcon" />
                </a>
                <a href="https://www.youtube.com/">
                    <FaYoutube
                        size={40}
                        className="footerIcon" />
                </a>
                <a href="https://twitter.com/?lang=pl">
                    <FaTwitter
                        size={40}
                        className="footerIcon" />
                </a>
            </div>
            <h4> <FaRegCopyright /> Copyright {getCurrentDate()} </h4>
        </div>
    )
}
export default Footer