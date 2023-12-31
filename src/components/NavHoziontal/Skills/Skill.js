import React from "react";
import "./style.css";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function Skill() {
  return (
    <div id="page3">
      <div className="" style={{ marginTop: 100, paddingLeft: 20 }}>
        <div className="">
          <h1 style={{ color: "blue" }}>Siklls</h1>
          <div className="row  contain-card text-center">
            <div class="card-skill col-xs-4">
              <h3>CSS</h3>
              <div class="progress-bar-circle">
                <progress
                  value=""
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: 0, width: 0 }}
                ></progress>
              </div>
              <div className="d-flex ">
                <div className="col-md-6 percent-year ">
                  <h2>28%</h2>
                  <p style={{ fontSize: 12 }}> last week</p>
                </div>

                <div className="col-md-6">
                  <h2>60%</h2>
                  <p style={{ fontSize: 12 }}>last month</p>
                </div>
              </div>
            </div>
            <div class="card-skill col-xs-4">
              <h3>HTML</h3>
              <div class="progress-bar-circle">
                <progress
                  value=""
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: 0, width: 0 }}
                ></progress>
              </div>
              <div className="d-flex col-md-6">
                <div className=" percent-year">
                  <h2>28%</h2>
                  <p style={{ fontSize: 12 }}> last week</p>
                </div>

                <div style={{ float: "left" }} className="col-md-6">
                  <h2>60%</h2>
                  <p style={{ fontSize: 12 }}>last month</p>
                </div>
              </div>
            </div>
            <div class="card-skill col-xs-4">
              <h3>JQuery</h3>
              <div class="progress-bar-circle">
                <progress
                  value=""
                  min="0"
                  max="100"
                  style={{ visibility: "hidden", height: 0, width: 0 }}
                ></progress>
              </div>
              <div className="d-flex col-md-6">
                <div className=" percent-year">
                  <h2>28%</h2>
                  <p style={{ fontSize: 12 }}> last week</p>
                </div>

                <div style={{ float: "left" }} className="col-md-6">
                  <h2>60%</h2>
                  <p style={{ fontSize: 12 }}>last month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row contain-progess">
            <div className="col-sm-6">
              <p style={{ marginTop: 20 }}>photoshop</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p style={{ marginTop: 20 }}>HTML 5</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p style={{ marginTop: 20 }}>WordPress</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-sm-6">
              <p style={{ marginTop: 20 }}>JQuyery</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p style={{ marginTop: 20 }}>CSS3</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <p style={{ marginTop: 20 }}>SEO</p>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
