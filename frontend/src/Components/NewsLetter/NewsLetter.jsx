import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter_box">
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="input-field">
          <input type="email" placeholder="Your Email id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
