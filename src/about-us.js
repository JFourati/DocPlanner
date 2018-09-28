import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Link, NavLink } from "react-router-dom";

class AboutUs extends React.Component {
  render() {
    return (
      <div className="description">
        <div className="main-logo">
          <img
            src="https://www.docplanner.com/img/sygnet.png"
            alt="Docplanner Group"
          />
        </div>
        <div className="title-1">
          <h1>Making the healthcare experience more human</h1>
        </div>
        <div className="site-description">
          <div className="p-container">
            <p>
              We want patients to find the perfect doctor and book an
              appointment in the most easy way. The patient journey should be
              enjoyable, and that's why we are always next to them: to help them
              find the best possible care. Anytime, anywhere.
            </p>
            <p>
              We also help doctors to better manage their practice and build
              their online reputation. With our integrated end-to-end solution,
              doctors are able not only to improve their online presence, but
              also to devote their time to what really matters: their patients.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutUs;
