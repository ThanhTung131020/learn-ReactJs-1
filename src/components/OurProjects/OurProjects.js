import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { HiOutlineLightBulb } from "react-icons/hi2";

import Background_1 from "../../asset/icon/work-1.jpg";
export default function OurProjects() {
  return (
    <div>
      <div>
        <div className="title">
          <h1 style={{ marginTop: 100 }}>Our Projects</h1>
          <p style={{ color: "#999999", marginTop: 40 }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
        <div className="card-ourprojects">
          <div className="d-flex ">
            <div
              class="col-md-4 col-sm-4"
              style={{
                backgroundImage: `url(${Background_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            ></div>
            <div
              class="col-md-4 col-sm-4"
              style={{
                backgroundImage: `url(${Background_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            ></div>
            <div
              class="col-md-4 col-sm-4"
              style={{
                backgroundImage: `url(${Background_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            ></div>
          </div>
          <div className="d-flex " style={{ marginTop: 0 }}>
            <div
              class="col-md-4 col-sm-4"
              style={{
                backgroundImage: `url(${Background_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            ></div>
            <div
              class="col-md-4 col-sm-4"
              style={{
                backgroundImage: `url(${Background_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            ></div>
            <div
              class="col-md-4 col-sm-4"
              style={{
                backgroundImage: `url(${Background_1})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: 300,
              }}
            ></div>
          </div>
        </div>
        <div className="row  contain-out-card ">
          <div className="out-card  col-md-3">
            <div className="inside-card">
              <h5>100</h5>
              <p>Awards</p>
            </div>
          </div>
          <div className="out-card  col-md-3">
            <div className="inside-card">
              <h5>1200</h5>
              <p>Complete Projects</p>
            </div>
          </div>
          <div className="out-card  col-md-3">
            <div className="inside-card">
              <h5>1200</h5>
              <p>Happy Customers</p>
            </div>
          </div>
          <div className="out-card  col-md-3">
            <div className="inside-card">
              <h5>500</h5>
              <p>Cups of coffee</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
