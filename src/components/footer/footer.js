import React from "react";
import { PiTwitterLogoDuotone } from "react-icons/pi";
import { BiLogoFacebook } from "react-icons/bi";
import { BsInstagram, BsTelephone } from "react-icons/bs";

import { IoLocationOutline } from "react-icons/io5";
import { IconNamAiFillCaretRighte } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
export default function footer() {
  return (
    <div style={{ backgroundColor: "black", height: "auto", width: "100%" }}>
      <div>
        <div
          className="row"
          style={{ color: "white", marginLeft: 20, marginTop: 0 }}
        >
          <div className="col-md-3" style={{ marginTop: 50 }}>
            <h3>About</h3>
            <p style={{ width: "50%" }}>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
            <div className="d-flex">
              <div
                className="col-md-4 d-flex"
                style={{
                  background: "grey",
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <PiTwitterLogoDuotone style={{ width: 40, height: 40 }} />
              </div>
              <div
                className="col-md-4 d-flex"
                style={{
                  background: "grey",
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BiLogoFacebook style={{ width: 40, height: 40 }} />
              </div>
              <div
                className="col-md-4 d-flex"
                style={{
                  background: "grey",
                  width: 50,
                  height: 50,
                  borderRadius: 100,
                  marginRight: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <BsInstagram style={{ width: 40, height: 40 }} />
              </div>
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: 50 }}>
            <h3>Links</h3>
            <ul style={{ listStyle: "none" }}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-3" style={{ marginTop: 50 }}>
            <h3>Sercives</h3>
            <ul style={{ listStyle: "none" }}>
              <li>
                <span class="icon-long-arrow-right mr-2"></span>Web Design
              </li>
              <li>Web Development</li>
              <li>Business Strategy</li>
              <li>Data Analysis</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="col-md-3" style={{ marginTop: 50 }}>
            <h3>Have a question?</h3>
            <div className="d-flex">
              <IoLocationOutline style={{ marginRight: 20 }} />
              <p style={{ width: 200 }}>
                203 Fake St. Mountain View, San Francisco, California, USA
              </p>
            </div>
            <div className="d-flex">
              <BsTelephone style={{ marginRight: 20 }} />
              <p style={{ width: 200 }}> +2 392 3929 210</p>
            </div>
            <div className="d-flex">
              <HiOutlineMail style={{ marginRight: 20 }} />
              <p style={{ width: 200 }}> info@yourdomain.com</p>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 18, color: "#999999" }}>
            Copyright ©2023 All rights reserved | This template is made with by
            Colorlib
          </p>
        </div>
      </div>
    </div>
  );
}
