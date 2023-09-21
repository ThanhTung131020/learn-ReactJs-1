import React from "react";
import "./style.css";
import { TfiGift } from "react-icons/tfi";

export default function Education() {
  return (
    <div id="page1">
      <div className="d-block">
        <div className="col-xs-9 content">
          <h1>Education</h1>
          <div className="d-flex">
            <div className="col-xs-2 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-xs-10 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Bachelor of Science in Computer Science</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="col-xs-9 content">
          <div className="d-flex">
            <div className="col-md-2 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-xs-10 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Computer Processing Systems/Computer Software</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="col-xs-9 content">
          <div className="d-flex">
            <div className="col-md-2 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-xs-10 contain-content">
              <span className="year-content">2014-2015</span>
              <h2>Diploma in Computer</h2>
              <span>Cambridge University</span>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
          <hr style={{ width: "80%" }} />
        </div>
        <div className="col-xs-9 content">
          <div className="d-flex">
            <div className="col-md-2 contain-icon">
              <h5>
                {" "}
                <TfiGift />{" "}
              </h5>
            </div>
            <div className="col-xs-10 contain-content">
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
          <hr style={{ width: "80%" }} />
        </div>
      </div>
    </div>
  );
}
