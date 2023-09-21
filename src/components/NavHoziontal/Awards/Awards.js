import React from "react";
import "./style.css";
import { TfiGift } from "react-icons/tfi";

export default function Awards() {
  return (
    <div id="page4">
      <div className="d-block" style={{ marginTop: 100 }}>
        <div className="col-md-9 content">
          <h1>Awards</h1>
          <div className="d-flex">
            <div className="col-md-1 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-md-11 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Top 10 Web Developer</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-9 content">
          <div className="d-flex">
            <div className="col-md-1 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-md-11 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Top 5 LeaderShip Exellence Winner</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-9 content">
          <div className="d-flex">
            <div className="col-md-1 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-md-11 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Top 4 Web Tester</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr />
        </div>
        <div className="col-md-9 content">
          <div className="d-flex">
            <div className="col-md-1 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-md-11 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Art & Creative Director</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
