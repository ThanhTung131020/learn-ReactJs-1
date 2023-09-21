import React from "react";
import "./style.css";
import Card from "react-bootstrap/Card";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { hover } from "@testing-library/user-event/dist/hover";
import Background_1 from "../../asset/icon/work-1.jpg";
export default function Services() {
  return (
    <div className="container-title">
      <div>
        <div className="title col-md-12">
          <h1>Services</h1>
          <p style={{ color: "#999999", marginTop: 40 }}>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia
          </p>
        </div>
      </div>

      <div>
        <div
          className="row card-services-container"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className="col-md-4">
            <div className="card-services">
              <HiOutlineLightBulb
                style={{ width: 60, height: 60, marginTop: 30 }}
              />
              <h3>WEB DESIGN</h3>
              <hr style={{ width: 30, marginLeft: "48%" }} />
              <p
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: "100%",
                  marginTop: 40,
                  marginBottom: 40,
                }}
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card-services">
              <HiOutlineLightBulb
                style={{ width: 60, height: 60, marginTop: 30 }}
              />
              <h3>WEB DESIGN</h3>
              <hr style={{ width: 30, marginLeft: "48%" }} />
              <p
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: "100%",
                  marginTop: 40,
                  marginBottom: 40,
                }}
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card-services">
              <HiOutlineLightBulb
                style={{ width: 60, height: 60, marginTop: 30 }}
              />
              <h3>PHOTOGHAPHY</h3>
              <hr style={{ width: 30, marginLeft: "48%" }} />
              <p
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: "100%",
                  marginTop: 40,
                  marginBottom: 40,
                }}
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="row card-services-container"
          style={{
            justifyContent: "space-between",
          }}
        >
          <div className="col-md-4 ">
            <div className="card-services">
              <HiOutlineLightBulb
                style={{ width: 60, height: 60, marginTop: 30 }}
              />
              <h3>WEB</h3>
              <hr style={{ width: 30, marginLeft: "48%" }} />
              <p
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: "100%",
                  marginTop: 40,
                  marginBottom: 40,
                }}
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card-services">
              <HiOutlineLightBulb
                style={{ width: 60, height: 60, marginTop: 30 }}
              />
              <h3>WEB DESIGN</h3>
              <hr style={{ width: 30, marginLeft: "48%" }} />
              <p
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: "100%",
                  marginTop: 40,
                  marginBottom: 40,
                }}
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-services">
              <HiOutlineLightBulb
                style={{ width: 60, height: 60, marginTop: 30 }}
              />
              <h3>WEB DESIGN</h3>
              <hr style={{ width: 30, marginLeft: "48%" }} />
              <p
                className=""
                style={{
                  paddingLeft: 20,
                  paddingRight: 20,
                  width: "100%",
                  marginTop: 40,
                  marginBottom: 40,
                }}
              >
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
