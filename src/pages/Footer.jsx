import React from 'react'
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container d-flex ms-2">
          <img src="./public/images/logo-removebg-preview.png" alt="" />
          <h3 className="text-warning fw-bolder mt-3">DAILY MEET</h3>
        </div>
        <div className="footer-icons ms-5">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Qualtiy</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <a href='#testimonials'><span>Testimonials</span></a>
          <a href='#work'><span>Work</span></a>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>hello@dm.com</span>
          <span>press@dm.com</span>
          <span>contact@dm.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  )
}

export default Footer